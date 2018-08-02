UPDATE projects
SET color_id = $1, font = $2, title = $3, domain = $4, logo = $5, about = $6, features = $7, color_palette = $8
WHERE project_id = $9
RETURNING *;

-- use a join to send back all of the data
