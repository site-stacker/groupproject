const bcrypt = require('bcryptjs')
let session_id_count = 1

module.exports =
    {
        getProjects: (req, res) => {
            const db = req.app.get('db')
            db.get_projects([req.session.user.user_id])
                .then(projects => res.status(200).send(projects))
                .catch((err) => res.status(500).send(err))
        },
        getProject: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            db.get_project([+project_id])
                .then(project => { res.status(200).send(project) })
                .catch((err) => res.status(500).send(err))
        },
        getColors: (req, res) => {
            const db = req.app.get('db')
            db.get_colors()
                .then(colors => res.status(200).send(colors))
                .catch((err) => res.status(500).send(err))
        },
        getAbout: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            db.get_about_component([project_id])
                .then((about) => res.status(200).send(about))
                .catch((err) => res.status(500).send(err))
        },
        getFeature: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            db.get_feature_components([project_id])
                .then((features) => res.status(200).send(features))
                .catch((err) => res.status(500).send(err))
        },
        createUser: (req, res) => {
            const { user_img, auth_id, username, email, password } = req.body
            const db = req.app.get('db')
            db.checkUsername([username]).then(user => {
                console.log(user)
                if (user.length !== 0) {
                    res.status(200).send('Username Taken. Try another.')
                } else {
                    const salt = bcrypt.genSaltSync(10)
                    console.log('salt: ', salt)
                    const hash = bcrypt.hashSync(password, salt)
                    console.log('hash: ', hash)
                    db.create_user([user_img, auth_id, username, email, hash])
                        .then(user => {
                            req.session.session_id = session_id_count
                            session_id_count++
                            req.session.user.user_id = user[0].user_id
                            req.session.user.username = user[0].username
                            console.log(req.session)
                            res.status(200).send(req.session.user)
                        })
                        .catch(err => res.status(500).send(err))
                }
            })
        },
        createAbout: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            if (req.session.user.user_id) {
                db.create_about_component([project_id, req.session.user.user_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            } else {
                db.create_default_about_component([project_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            }
        },
        createFeature: (req, res) => {
            const { project_id } = req.params;
            const db = req.app.get('db')
            if (req.session.user.user_id) {
                db.create_feature_component([project_id, req.session.user.user_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            } else {
                db.create_default_feature_component([project_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            }
        },
        loginUser: (req, res) => {
            const { username, password } = req.body
            const db = req.app.get('db')
            db.checkUsername([username]).then(user => {
                if (user.length !== 0) {
                    const validPassword = bcrypt.compareSync(password, user[0].password)
                    if (validPassword) {
                        req.session.user.id = session_id_count
                        session_id_count++
                        req.session.user.user_id = user[0].user_id
                        req.session.user.username = user[0].username
                        console.log('hey', req.session)
                        res.status(200).send(req.session.user.user_id.toString())
                    } else {
                        console.log(req.session)
                        res.status(200).send('Invalid Password')
                    }
                } else {
                    console.log(req.session)
                    res.status(200).send('User does not exist')
                }
            })
        },
        createProject: (req, res) => {
            const { user_id, color_id, font, title, domain, logo } = req.body
            const db = req.app.get('db')
            db.create_project([user_id, color_id, font, title, domain, logo])
                .then(projectId => res.status(200).send(projectId))
                .catch((err) => res.status(500).send(err))
        },
        createHeader: (req, res) => {
            const { project_id } = req.params
            const
                {
                    main_img,
                    button_text,
                    heading,
                    subheading,
                    background_img,
                    user_id,
                    picture_and_color
                } = req.body
            const db = req.app.get('db')
            db.create_header_component(
                [
                    project_id,
                    main_img,
                    button_text,
                    heading,
                    subheading,
                    background_img,
                    user_id,
                    picture_and_color
                ])
                .then(headerComp => res.status(200).send(headerComp))
                .catch((err) => res.status(500).send(err))
        },
        createDefaultProject: (req, res) => {
            const { color_id, font, title } = req.body
            const db = req.app.get('db')
            if (req.session.user.user_id) {
                db.create_project([req.session.user.user_id, color_id, font, title])
                    .then(projectId => res.status(200).send(projectId))
                    .catch((err) => res.status(500).send(err))
            } else {
                db.create_default_project([color_id, font, title])
                    .then(projectId => res.status(200).send(projectId))
                    .catch((err) => res.status(500).send(err))
            }
        },
        createDefaultHeader: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            if (req.session.user.user_id) {
                db.create_header_component([project_id, req.session.user.user_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            } else {
                db.create_default_header([project_id])
                    .then(() => res.status(200).send())
                    .catch((err) => res.status(500).send(err))
            }
        },
        updateHeader: (req, res) => {
            const { project_id } = req.params
            const { main_img, button_text, heading, subheading, background_img, picture_and_color, background_color } = req.body
            const db = req.app.get('db')
            db.update_header_component([main_img, button_text, heading, subheading, background_img, picture_and_color, background_color, project_id])
                .then(updatedHeader => res.status(200).send(updatedHeader))
                .catch((err) => res.status(500).send(err))
        },
        updateProject: (req, res) => {
            const { project_id } = req.params
            const { color_id, font, title, domain, logo, about, features } = req.body
            const db = req.app.get('db')
            db.update_project([color_id, font, title, domain, logo, about, features, project_id])
                .then(updatedProject => res.status(200).send(updatedProject))
                .catch((err) => res.status(500).send(err))
        },
        updateAbout: (req, res) => {
            const { project_id } = req.params
            const { about_header, about_text } = req.body
            const db = req.app.get('db')
            db.update_about_components([about_header, about_text, project_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        },
        updateFeature: (req, res) => {
            const { project_id } = req.params
            const { feature_icon, feature_title, feature_text } = req.body
            const db = req.app.get('db')
            db.update_feature_component([feature_icon, feature_title, feature_text, project_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        },
        deleteProject: (req, res) => {
            const { project_id } = req.params
            const db = req.app.get('db')
            db.delete_project([project_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        },
        deleteUser: (req, res) => {
            const { user_id } = req.params
            const db = req.app.get('db')
            db.delete_user([user_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        },
        deleteAbout: (req, res) => {
            const { about_id } = req.params
            const db = req.app.get('db')
            db.delete_about_component([about_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        },
        deleteFeature: (req, res) => {
            const { feature_id } = req.params
            const db = req.app.get('db')
            db.delete_feature_component([feature_id])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        }
    }
