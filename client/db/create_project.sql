INSERT INTO projects (user_id, color_id, font, title, domain, logo, about, features)
VALUES ($1, $2, $3, $4, '', '', false, false)
RETURNING project_id;