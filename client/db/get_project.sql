SELECT * FROM projects
JOIN header_components ON projects.project_id = header_components.project_id
JOIN about_components ON projects.project_id = about_components.project_id
WHERE projects.project_id = $1;