CREATE TABLE USERS(
    username VARCHAR(30) PRIMARY KEY NOT NULL,
    PASSWORD VARCHAR(20) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(20) NOT NULL
);

ALTER TABLE users ADD COLUMN ROLE VARCHAR(5) AFTER last_name;

INSERT INTO employees(
    ID,
    LastName,
    FirstName,
    FatherName,
    RecruitmentDate,
    UntilDate,
    AFM,
    AMKA,
    PhoneNo,
    email
)
VALUES(
    NULL,
    'Μιχελάκης',
    'Στέφανος',
    'Δημήτριος',
    STR_TO_DATE('1-01-2021', '%d-%m-%Y'),
    STR_TO_DATE('1-01-2022', '%d-%m-%Y'),
    999999999,
    99999999999,
    9999999999,
    NULL
)

CREATE TABLE EMPLOYEES(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    LastName VARCHAR(20) NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    FatherName VARCHAR(20) NOT NULL,
    RecruitmentDate DATE NOT NULL,
    UntilDate DATE NOT NULL,
    AFM VARCHAR(9) NOT NULL,
    AMKA VARCHAR(11) NOT NULL,
    PhoneNo VARCHAR(10) NULL,
    email VARCHAR(30) NULL
);

ALTER table employees ADD COLUMN IBAN VARCHAR(27) NOT NULL AFTER email;

ALTER TABLE employees ADD COLUMN restDays int(3) AFTER IBAN;

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