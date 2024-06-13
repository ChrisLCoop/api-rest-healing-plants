CREATE DATABASE api_plants;


CREATE TABLE plants(
    id_plant INT(2) NOT NULL AUTO_INCREMENT,
    common_name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(100) NOT NULL,
    description_plant TEXT(500) NOT NULL,
    used_parts VARCHAR(255) NOT NULL,
    use_plant TEXT(500) NOT NULL,
    ways_use_plant TEXT(500) NOT NULL,
    url_image VARCHAR(255),
    PRIMARY KEY(id_plant)

);