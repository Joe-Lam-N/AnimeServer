// const express = require('express')
// const { url } = require('inspector')
// const path = require('path')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,"/video test.mp4"))
//   console.log(req)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


//MYSQL test

// const mysql = require('mysql');
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'joelam415',
//   password: 'lam415457',
//   database: "list"
// });
// con.connect(function (err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM users";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });


//   con.end((err)=> {
//     if(err){
//       console.error("error closing MySQL Connection:", err);
//       return;
//     }
//     console.log("NySQL connection closed.")
//   })

// });


