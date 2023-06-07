CREATE DATABASE IF NOT EXISTS ibmskillhive;
USE ibmskillhive;
CREATE TABLE IF NOT EXISTS Teams(
    teamID VARCHAR(64),
    name VARCHAR(64),
    PRIMARY KEY(teamID)
);
CREATE TABLE IF NOT EXISTS Employees(
    employeesID VARCHAR(64),
    name VARCHAR(255),
    teamID VARCHAR(64),
    email VARCHAR(255),
    PRIMARY KEY(employeesID),
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
    skillsID VARCHAR (64),
    PRIMARY KEY (typeID),
    FOREIGN KEY (skillsID) REFERENCES Skills (skillsID)
);
CREATE TABLE IF NOT EXISTS Certifications(
    certificationID VARCHAR(64),
    employeeID VARCHAR(64),
    typeID VARCHAR (64),
    PRIMARY KEY (certificationID),
    FOREIGN KEY (employeeID) REFERENCES Employees (employeesID),
    FOREIGN KEY (typeID) REFERENCES Types (typeID)
);
