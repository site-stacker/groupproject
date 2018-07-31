UPDATE projects
SET user_id = $1
WHERE project_id = $2;