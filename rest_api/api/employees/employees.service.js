const pool = require("../../config/database");

module.exports = {
    createEmployee: (data, callBack) => {
        pool.query(`INSERT INTO employees(
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
                ?,
                ?,
                ?,
                STR_TO_DATE(?, '%d-%m-%Y'),
                STR_TO_DATE(?, '%d-%m-%Y'),
                ?,
                ?,
                ?,
                ?
            )`,
            [
                data.LastName,
                data.FirstName,
                data.FatherName,
                data.RecruitmentDate,
                data.UntilDate,
                data.AFM,
                data.AMKA,
                data.PhoneNo,
                data.email
            ], (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    },
    getEmployee : (data, callBack) => {
        pool.query(
            `select * from employees where ID = ?`,
            [
                data.ID
            ],
            (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    },
    getEmployees : callBack => {
        pool.query(
            `select * from employees`,
            [],
            (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    },
    updateEmployee: (data, callBack) => {
        pool.query(
            `UPDATE employees 
            SET LastName = ?, 
            FirstNAME = ?, 
            AFM = ?,
            AMKA = ?,
            PhoneNo = ?,
            email = ?
            WHERE employees.ID = ?`,
            [
                data.newLastName,
                data.newFirstNAME,
                data.newAFM,
                data.newAMKA,
                data.newPhoneNo,
                data.newEmail,
                data.ID
            ], (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    },
    deleteEmployee: (data, callBack) => {
        pool.query(`
            delete from employees where ID = ?
            `,
            [
                data.ID
            ],(err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    }
}