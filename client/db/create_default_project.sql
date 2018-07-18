INSERT INTO projects (user_id, color_id, font, title, domain, logo)
VALUES ($1, 1, 'Karla', 'Your Company', '', 'http://wcobhojpur.gov.np/default_images/default-logo.png')
RETURNING project_id;