
module.exports = 
{ 
    getProjects: (req, res) => {
    const { id } = req.params
    const db = req.app.get('db')
    db.get_projects([id])
        .then(project => res.status(200).send(project))
        .catch((err) => res.status(500).send(err))
    },
}