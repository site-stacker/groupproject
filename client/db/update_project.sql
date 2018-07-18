UPDATE projects
SET color_id = $1, font = $2, title = $3, domain = $4, logo = $5
WHERE project_id = $6;
