const express = require('express')
const { url } = require('inspector')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/video test.mp4"))
  console.log(req)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})