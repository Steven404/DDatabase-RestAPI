CREATE TABLE USERS(
    username VARCHAR(30) PRIMARY KEY,
    PASSWORD VARCHAR(20),
    first_name VARCHAR(15),
    last_name VARCHAR(20)
);

INSERT INTO `users`(
    `username`,
    `PASSWORD`,
    `first_name`,
    `last_name`
)
VALUES(
    'ADMIN',
    'ADMIN123',
    'Στέφανος',
    'Μιχελάκης'
)

CREATE TABLE EMPLOYEES(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    LastName VARCHAR(20) NOT NULL,
    FirstNAME VARCHAR(20) NOT NULL,
    AFM VARCHAR(9) NOT NULL,
    AMKA VARCHAR(11) NOT NULL,
    PhoneNo VARCHAR(10) NOT NULL,
    email VARCHAR(30) NULL
);

UPDATE employees SET LastName = Μιχελάκης, FirstNAME = Στέφανος WHERE employees.ID = 1

INSERT INTO `employees`(
    `ID`,
    `LastName`,
    `FirstNAME`,
    `AFM`,
    `AMKA`,
    `PhoneNo`,
    `email`
)
VALUES(
    NULL,
    'MICHELAKIS',
    'STEFANOS',
    '999999999',
    '99999999999',
    '9999999999',
    'stmiche@teiemt.gr'
);