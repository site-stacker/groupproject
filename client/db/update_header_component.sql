UPDATE header_components
SET main_img = $1, button_text = $2, heading = $3, subheading = $4
WHERE project_id = $5;