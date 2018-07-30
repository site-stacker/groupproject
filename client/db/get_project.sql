SELECT * FROM projects
JOIN colors ON projects.color_id = colors.color_id
JOIN header_components ON projects.project_id = header_components.project_id
JOIN about_components ON projects.project_id = about_components.project_id
-- JOIN feature_components ON projects.project_id = feature_components.project_id
WHERE projects.project_id = $1;