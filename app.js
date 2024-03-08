const express = require('express')
const { url } = require('inspector')
const path = require('path')
const multer = require('multer')
const {getList,getListId} = require("./DBtest")


const desktopPath = "C:\\Users\\joe41\\OneDrive\\Desktop\\test"
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, desktopPath)
  },
  filename: function (req,file,cb){
    cb(null,file.originalname)
  },

})
const upload = multer ({storage})
//Progress Middleware
function progress_middleware(req, res, next){
  let progress = 0;
  const file_size = req.headers["content-length"];
  
  // set event listener
  req.on("data", (chunk) => {
      progress += chunk.length;
      const percentage = (progress / file_size) * 100;
      // other code ...
      
      
      console.log(Math.floor(percentage)+"%")
  });
  
  // invoke next middleware
  next();
}

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send("Hello World!")
  console.log(req)
})
app.get("/api/list", async(req, res)=>{
  res.send(await getList());
})


app.post('/api/upload',progress_middleware, upload.any("file"), (req,res)=>{
  res.send('Uploaded Successfully!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
