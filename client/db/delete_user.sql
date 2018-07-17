DELETE FROM header_components
WHERE user_id = $1;

DELETE FROM completed_projects
WHERE user_id = $1;

DELETE FROM projects
WHERE user_id = $1;

DELETE FROM users
WHERE user_id = $1;