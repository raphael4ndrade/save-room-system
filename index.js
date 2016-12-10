const express = require("express");
const knex = require("./db");
const bodyparse = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparse.json());

// app routing...
app.get("/salas", (req, res) => {

    })
    .get("/pessoas", (req, res) =>{

    })
    .post("", (req, res) => {
    
    });


app.listen(3000)
console.log("Aplicação online!");