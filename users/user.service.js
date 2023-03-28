const pool = require("../database")
require("dotenv").config()

module.exports = {
    create: (data,callback)=>{
        // pool.query(`SELECT * FROM users WHERE email = ?`,[data.email],
        // (error,results,fields)=>{
        //     console.log(results)
        //     if (results){
        //         console.log("Backend theke bolchi",results[0])
        //         console.log("Backend theke bolchi")
        //         // return callback(true)
        //     }
        // })
        pool.query(
            `insert into users(name,email,password,isVerified) values(?,?,?,?)`,
            [data.name,data.email,data.password,data.isVerified],
            (error,results,fields)=>{
                if (error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    getUsers: (callBack)=>{
        pool.query(`SELECT * FROM users`,[],(error,results,fields)=>{
            if (error){
                callBack(error);
            }
            return callBack(null,results)
        })
    },
    getUserByEmail:(email,callBack)=>{
        pool.query(`SELECT * FROM users WHERE email = ?`,
        [email],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results[0])
        }
        )
    },
    deleteUser:(id,callback)=>{
        pool.query(`DELETE FROM users WHERE id = ?;`,
        [id]
        ),(error,results,fields)=>{
            if (error){
                callback(error)
            }
            return callback(error,results)
        }
    }
}