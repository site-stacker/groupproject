
const functions = {
    //Jon's Tests
    fonts: (arr) =>{
        arr === true
    },
    
    //Michael

    //Michael
    createAbout: (user_id, project_id) => {
        console.log(user_id)
        if (user_id) {
            return 'Project created and saved to user.'
        } else {
            return `Project #${project_id} created.`
        }
    },
    
    publish: (title, project_id) => {
        if(title && project_id) {
            let domain = `www.skizzl.com/#/z/${project_id}/` + title.toLowerCase().replace(' ', '-')
            return domain;
        }
        else {
            return 'data invalid'
        }
    },
    //Seba

    toggle: (bool) => !bool,
    checkSection: (s) => s === "About Us" ? "About Us": s === "Features" ? "Features" : "Header"

}

module.exports = functions