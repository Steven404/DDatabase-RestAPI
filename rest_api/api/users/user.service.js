const pool = require("../../config/database");

module.exports = {
    create: (data,callBack) => {
        pool.query(
            `INSERT INTO USERS(
                username,
                PASSWORD,
                first_name,
                last_name
                )
            VALUES(
                ?,
                ?,
                ?,
                ?
            )`, 
            [
                data.username, 
                data.password,
                data.first_name,
                data.last_name,

            ], (error, results, fields) =>{
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    }
};