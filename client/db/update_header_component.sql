UPDATE header_components
SET main_img = $1, button_text = $2, heading = $3, subheading = $4, background_img = $5, picture_and_color = $6, background_color = $7
WHERE project_id = $8;