CREATE DATABASE IF NOT EXISTS skillhive;
USE skillhive;
CREATE TABLE IF NOT EXISTS Teams(
    teamID VARCHAR(8),
    name VARCHAR(25),
    PRIMARY KEY(teamID)
);
CREATE TABLE IF NOT EXISTS Employees(
    employeesID VARCHAR(8),
    name VARCHAR(255),
    teamID VARCHAR(8),
    email VARCHAR(255),
    PRIMARY KEY(employeeID),
    FOREIGN KEY(teamID) REFERENCES Teams(teamID)
);
CREATE TABLE IF NOT EXISTS Skills(
    skillsID VARCHAR(64),
    skillName VARCHAR(1000),
    PRIMARY KEY (skillsID)
);
CREATE TABLE IF NOT EXISTS Types(
    typeID VARCHAR(64),
    name VARCHAR(1000),
    type VARCHAR(1000),
    url VARCHAR(1000),
    image VARCHAR(1000),
    PRIMARY KEY (typeID) 
);
CREATE TABLE IF NOT EXISTS Certifications(
    certificationID VARCHAR(8),
    employeeID VARCHAR(8),
    typeID VARCHAR (64),
    PRIMARY KEY (certificationID),
    FOREIGN KEY (employeeID) REFERENCES Employees (employeesID),
    FOREIGN KEY (typeID) REFERENCES Types (typeID)
);
