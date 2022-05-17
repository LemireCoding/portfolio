const express = require('express');
const app = express();

const mysql = require('mysql');
const cors = require("cors"); 
const bodyParser = require('body-parser');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sys10gl$$',
    database: 'portfoliodb'
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res) => {
    
});

app.get("/api/user", (req,res) => {

    const query = "SELECT * FROM users WHERE username = '" + req.query.usern + "' AND password = '" + req.query.pw+ "';";
    db.query(query ,(err,result)=>{
        res.send(result);
    });
});


app.get("/api/projects", (req,res) => {

    const query = "SELECT * FROM projects;";
    db.query(query ,(err,result)=>{
        res.send(result);
    });
});


app.post("/api/addproject", (req,res) => {
   console.log("api");
    const projectname = req.body.projectName;
    const githuburl = req.body.githubUrl;
    const projecturl = req.body.projectUrl;
    const technology = req.body.mainTechnology;
    console.log(req.body);
    const query = "INSERT INTO projects (projectname, githuburl, projecturl,technology) VALUES (?,?,?,?);";
    db.query(query ,[projectname,githuburl,projecturl,technology],(err,result)=>{
        res.send(result);
    
    });
});

app.listen(3001,()=>{
    console.log("running on port 3001");
});