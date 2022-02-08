const pool = require("../../config/database");

module.exports = {
    createUser: (data,callBack) => {
        pool.query(
            `INSERT INTO USERS(
                username,
                PASSWORD,
                first_name,
                last_name,
                ROLE
                )
            VALUES(
                ?,
                ?,
                ?,
                ?,
                'BASIC'
            )`, 
            [
                data.username, 
                data.password,
                data.first_name,
                data.last_name,
            ], (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select * from users`,
            [],
            (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack (null, results);
            }
        );
    },
    getUserByUsername: (username, callBack) => {
        pool.query(
            `select * from users where username = ?`,
            [username],
            (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                console.log(results[0]);
                return callBack (null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where username =?`,
            [data.username],
            (err, results, fields) => {
                if (err){
                    return callBack(err);
                }
                return callBack(null, results);
            }
        );
    },
};