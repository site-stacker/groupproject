UPDATE about_components
SET about_header = $1, about_text = $2
WHERE about_component_id = $3;