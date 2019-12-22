SET NAMES UTF8;
DROP DATABASE IF EXISTS team;
CREATE DATABASE team CHARSET=UTF8;
USE team;
/******  用户登录  *******/
CREATE TABLE team_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(11),
  upwd  VARCHAR(32),
  image VARCHAR(128)
);
INSERT INTO team_login VALUES(null,13112344321,123456,"touxiang1.jpg");
INSERT INTO team_login VALUES(null,13100001111,123321,"touxiang2.jpg");