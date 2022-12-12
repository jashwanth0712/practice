import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';
let i=0;
const app = express();
const PORT =5000;

app.use(bodyParser.json());
app.use("/users",userRoutes);

app.get("/",(req,res)=>{console.log("request recieved from home page ");res.send(`${i}`);i++})
app.listen(PORT,()=>{console.log(`Server running at port : ${PORT}`)})
