UPDATE about_components
SET about_header = $1, about_text = $2
WHERE project_id = $3;