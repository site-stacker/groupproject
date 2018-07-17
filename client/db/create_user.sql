INSERT INTO users (user_img, auth_id, username, email)
VALUES ($1, $2, $3, $4)
RETURNING *;