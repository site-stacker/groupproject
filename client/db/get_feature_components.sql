SELECT * FROM feature_components
WHERE project_id = $1
ORDER BY feature_component_id;