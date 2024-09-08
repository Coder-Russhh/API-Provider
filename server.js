const express = require("express");
const colors = require("colors");
const cors = require("cors");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRoutes = require("./routes/apiRoute")

const app = express();
const PORT = process.env.PORT || 5000


// middlewares ----
app.use(cors())
app.use(rateLimiter)


// api routes ----
app.use("/api/v2",apiRoutes)

// error handling ----
app.get("/",(req,res)=>{
    console.log("hii in console");
    res.send("hii ram from backend");
})

app.listen(PORT, ()=>{
    console.log(`server is connected at ${PORT}`.bgBlue);
})