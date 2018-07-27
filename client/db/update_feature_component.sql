UPDATE feature_components
SET feature_icon = $1, feature_title = $2, feature_text = $3
WHERE product_id = $4;