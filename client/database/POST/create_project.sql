INSERT INTO projects (user_id, color_id, font, title, domain, logo)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING project_id;