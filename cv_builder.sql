CREATE TABLE details(
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
	phone_number INT,
    address VARCHAR(255)
);
CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    details_id INT NOT NULL,
    summary TEXT,
    FOREIGN KEY(details_id) REFERENCES details(id)
);

CREATE TABLE skills (
	id INT AUTO_INCREMENT PRIMARY KEY,
	skill_name VARCHAR(255) NOT NULL
);
CREATE TABLE user_skills (
    user_id INT NOT NULL,
    skill_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(skill_id) REFERENCES skills(id)
);
CREATE TABLE schools (
	id INT AUTO_INCREMENT PRIMARY KEY,
    school_name VARCHAR(255) UNIQUE,
    started_at DATETIME DEFAULT NOW(),
    ended_at DATETIME DEFAULT NOW()
);
CREATE TABLE links (
	id INT AUTO_INCREMENT PRIMARY KEY,
	link_url VARCHAR(255),
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE education (
	user_id INT NOT NULL,
    school_id INT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(school_id) REFERENCES schools(id)
);
CREATE TABLE projects(
	id INT AUTO_INCREMENT PRIMARY KEY,
	project_name VARCHAR(255)
);
CREATE TABLE experience (
	id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    user_id INT NOT NULL,
	decription TEXT,
    started_at DATETIME DEFAULT NOW(),
    ended_at DATETIME DEFAULT NOW(),
	FOREIGN KEY(project_id) REFERENCES projects(id),
	FOREIGN KEY(user_id) REFERENCES users(id)
);
