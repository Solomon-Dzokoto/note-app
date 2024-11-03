const express = require("express");
const app = express();

const PORT = 30001

 app.get('/app',(req,res)=>{
    res.send("Hello World")
 })

app.listen(PORT,()=>{
   console.log(`App is running on port ${PORT}`)
})