require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./users/user.router")


app.use(express.json())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Some message")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running port:",process.env.PORT)
})