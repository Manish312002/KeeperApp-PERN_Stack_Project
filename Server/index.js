import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors"

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.use(cors())

// Postgres client setup 
const db = new pg.Client({
    user: "postgres",
    password: "root",
    database: "Web Dev",
    host: "localhost",
    port: 5432
})
db.connect()

// Get all todos
app.get("/",async (req,res) => {
    try{
        const result = await db.query("select * from todo_app")
        res.json(result.rows)
    }catch(err){
        console.error("Error fetching data",err)
        res.status(400).json('Internal Server Error')
    }
})

// creating new note 
app.post("/todo_new",async (req,res) => {
    const {title,note} = req.body
    try{
        const result = await db.query("insert into todo_app (title,note) values ($1,$2) RETURNING *",[title,note])
        res.status(201).json(result.rows[0])
    }catch(err){
        console.error("Error Creating Note",err)
        res.status(400).json("Internal Server Error")
    }
})

// Delete note 
app.delete("/todo_delete/:id",async (req,res) => {
    const {id} = req.params
    console.log(id)
    try{
        const result = await db.query("delete from todo_app where id=$1",[id])
        res.status(201).end()
    }catch(err){
        console.error("Error Deleting Note",err)
        res.status(400).json("Internal Server Error")
    }
})

app.listen(port,() =>{
    console.log("Server in online http://localhost:3000")
})