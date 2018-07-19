INSERT INTO users (user_img, auth_id, username, email, password)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;