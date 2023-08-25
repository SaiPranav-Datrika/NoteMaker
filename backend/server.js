
const express= require('express');

const notes=require('./data/notes');
const dotenv=require('dotenv');
const app=express();
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRouter.js")
dotenv.config();

//run();
//connectDB.catch(console.dir);

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is RUNNING!!");
});
app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.use('/api/users',userRoutes);

const PORT= process.env.PORT || 5200;

app.listen(PORT,console.log(`Server Started on port ${PORT}`));


