UPDATE header_components
SET user_id = $1
WHERE project_id = $2;