INSERT INTO projects (user_id, color_id, font, title, domain, logo, about, features, color_palette)
VALUES ($1, $2, $3, $4, '', '', false, false, $5)
RETURNING project_id;