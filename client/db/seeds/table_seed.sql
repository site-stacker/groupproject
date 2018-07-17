CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
user_img TEXT,
auth_id TEXT,
email TEXT
);

CREATE TABLE colors (
color_id SERIAL PRIMARY KEY,
color_palette_name VARCHAR(40),
color_palette TEXT
);

CREATE TABLE projects (
project_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
color_id INTEGER REFERENCES colors(color_id),
font TEXT,
title VARCHAR(40),
domain TEXT,
logo TEXT
);

CREATE TABLE completed_projects (
completed_id SERIAL PRIMARY KEY,
project_id INTEGER REFERENCES projects(project_id),
user_id INTEGER REFERENCES users(user_id),
domain TEXT,
completed DATE
);

CREATE TABLE header_components (
header_component_id SERIAL PRIMARY KEY,
project_id INTEGER REFERENCES projects(project_id),
main_img TEXT,
button_text VARCHAR(30),
heading VARCHAR(30),
subheading VARCHAR(50)
);