import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;
let item="";
var task=[];

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.post("/submit",(req,res)=>{

    item =req.body.newItem; 
    task.push(item);
    for (var i=0; i<task.length;i++){
        res.send(task[i])
    }
    res.redirect("/");
   res.render("index.ejs",{genList:task});
   
   
})




app.listen(port,(req,res)=>{
    console.log(`listening to port:${port}`);
})