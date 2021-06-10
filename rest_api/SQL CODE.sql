CREATE TABLE USERS(
    username VARCHAR(30) PRIMARY KEY,
    PASSWORD VARCHAR(20),
    first_name VARCHAR(15),
    last_name VARCHAR(20)
);

INSERT INTO employees(
    ID,
    LastName,
    FirstNAME,
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
    FirstNAME VARCHAR(20) NOT NULL,
    FatherName VARCHAR(20) NOT NULL,
    RecruiteMentDate DATE NOT NULL,
    UntillDate DATE NOT NULL,
    AFM VARCHAR(9) NOT NULL,
    AMKA VARCHAR(11) NOT NULL,
    PhoneNo VARCHAR(10) NULL,
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