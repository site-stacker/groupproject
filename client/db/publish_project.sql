UPDATE projects
SET domain = $1
WHERE project_id = $2
RETURNING domain;