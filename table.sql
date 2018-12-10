CREATE DATABASE IF NOT EXISTS `harshapp`;
USE `harshapp`;

-- SELECT * FROM `booking`;
-- DROP TABLE `users`;
-- DROP TABLE `booking`;

CREATE TABLE `users` ( 
    UserNameID int(9) NOT NULL auto_increment,
    userName VARCHAR(40) NOT NULL,
    userEmail VARCHAR(40) NOT NULL,
    userFullName VARCHAR(40) NOT NULL,
    pass VARCHAR(40) NOT NULL, 
    PRIMARY KEY(UserNameID) 
);

CREATE TABLE `booking` ( 
    UserNameID int(9) NOT NULL auto_increment,
    userName VARCHAR(40) NOT NULL,
    userEmail VARCHAR(40) NOT NULL,
    bookingID VARCHAR(100) NOT NULL,
    seatNum VARCHAR(100) NOT NULL,
    eventName VARCHAR(100) NOT NULL,
    eventDay VARCHAR(40) NOT NULL,
    eventTime VARCHAR(40) NOT NULL,
    PRIMARY KEY(UserNameID) 
);
