const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()





async function getList(){
    const result = await con.query("SELECT * FROM users")
    console.log(result[0])
    return(result[0])
}

async function getListId(id){
    const [rows] = await con.query(
        `SELECT * FROM users WHERE id = ?`, [id])
        return rows[0]
}

getList()

module.exports = {getList,getListId}

