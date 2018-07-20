DELETE FROM feature_components
WHERE project_id = $1;

DELETE FROM about_components
WHERE project_id = $1;

DELETE FROM header_components
WHERE project_id = $1;

DELETE FROM projects
WHERE project_id = $1;