import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let a=[
    {
        "firstname":"jashwanth",
        "lastname":"peddisetty",
        "age":20
    
    }
]
router.get('/',(req,res)=>{
    res.send(a);
    console.log("users worked")
});


router.post('/',(req,res)=>{
    const us=req.body;
    let temp={...us,"id":uuidv4()}
    a.push(temp);
    console.log(temp)
    res.send(`${temp} added to the database`);
});

router.get("/blank",(req,res)=>{
    console.log("go blank");
    res.send("blanked");
    a=[];
});
export default router;