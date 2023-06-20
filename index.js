const express = require("express");
const cors  = require("cors")
const { UserRouter } = require("./route/UserRoutes");
const { connection } = require("./config/db");
const app = express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("OK")
})
app.use("/user",UserRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to Db!!")
    } catch (error) {
        console.log(error);

    }
    console.log("server is running")
})