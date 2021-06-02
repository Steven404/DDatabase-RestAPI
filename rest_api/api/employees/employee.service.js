const pool = require("../../config/database");

module.exports = {
    create: (data,callBack) => {
        pool.query(
            `INSERT INTO EMPLOYEES(
                ID,
                LastName,
                FirstNAME,
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
                ?,
                ?
            )`, 
            [
                data.last_name, 
                data.first_name,
                data.afm,
                data.amka,
                data.phone_no,
                data.email
            ], (error, results, fields) =>{
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    }
};