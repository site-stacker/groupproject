INSERT INTO projects (color_id, font, title, domain, logo, about, features, color_palette)
VALUES ($1, $2, $3, '', '', false, false, $4)
RETURNING project_id;