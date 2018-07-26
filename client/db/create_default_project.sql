INSERT INTO projects (color_id, font, title, domain, logo)
VALUES ($1, $2, $3, '', 'http://lees.fe.uni-lj.si/uploads/default-logo.png')
RETURNING project_id;