INSERT INTO projects (color_id, font, title, domain, logo, about, features)
VALUES ($1, $2, $3, '', '', false, false)
RETURNING project_id;