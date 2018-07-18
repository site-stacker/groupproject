module.exports = 
{ 
    getProjects: (req, res) => {
    const { user_id } = req.params
    const db = req.app.get('db')
    db.get_projects([user_id])
        .then(projects => res.status(200).send(projects))
        .catch((err) => res.status(500).send(err))
    },
    getProject: (req, res) => {
        const { user_id, project_id } = req.params
        const db = req.app.get('db')
        db.get_project([user_id, project_id])
            .then(project => res.status(200).send(project))
            .catch((err) => res.status(500).send(err))
    },
    getColors: (req, res) => {
        const db = req.app.get('db')
        db.get_colors()
            .then(colors => res.status(200).send(colors))
            .catch((err) => res.status(500).send(err))
    },
    createUser: (req, res) => {
        const {user_img, auth_id, username, email} = req.body
        const db = req.app.get('db')
        db.create_user([user_img, auth_id, username, email])
            .then(user => res.status(200).send(user))
            .catch((err) => res.status(500).send(err))
    },
    createProject: (req, res) => {
        const {user_id, color_id, font, title, domain, logo} = req.body
        const db = req.app.get('db')
        db.create_project([user_id, color_id, font, title, domain, logo])
            .then(newProject => res.status(200).send(newProject))
            .catch((err) => res.status(500).send(err))
    },
    createHeader: (req, res) => {
        const {project_id} = req.params
        const 
        {
            main_img, 
            button_text, 
            heading, 
            subheading,
            background_img,
            user_id
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
            user_id
        ])
            .then(headerComp => res.status(200).send(headerComp))
            .catch((err) => res.status(500).send(err))
    },
    updateHeader: (req, res) => {
        const {headerid} = req.params
        const { main_img, button_text, heading, subheading} = req.body
        const db = req.app.get('db')
        db.update_header_component([main_img, button_text, heading, subheading, headerid])
            .then(updatedHeader => res.status(200).send(updatedHeader))
            .catch((err) => res.status(500).send(err))
    },
    updateProject: (req, res) => {
        const {project_id} = req.params
        const {color_id, font_id, title, domain, logo} = req.body
        const db = req.app.get('db')
        db.update_project([color_id, font_id, title, domain, logo, project_id])
            .then(updatedProject => res.status(200).send(updatedProject))
            .catch((err) => res.status(500).send(err))
    },
    deleteProject: (req, res) => {
        const {project_id} = req.params
        const db = req.app.get('db')
        db.delete_project([project_id])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    },
    deleteUser: (req, res) => {
        const {user_id} = req.params
        const db = req.app.get('db')
        db.delete_user([user_id])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }
}