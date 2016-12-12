const express = require("express");
const knex = require("./db");
const bodyparse = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparse.json());

// app routing...
app.get("/room", (req, res) => {

    })
    .get("/person", (req, res) =>{

    })
    .post("/room", (req, res) => {
        let localdata = req.body;
        let notExist = knex("room").where("id_room", ret[0]);
        knex("room").insert(localdata, "id_room").then((ret) => {
            localdata.id_room = ret[0];
            res.send(localdata);
        }).catch((err) => {
            res.status(500).send(err);
            console.log(err);
        });
    })
    .post("/person", (req, res) => {
        let localdata = req.body;
        knex("person").select()
    })
    .post("/room_person", (req, res) => {

    });



knex.migrate.latest().then( ()=> {
    app.listen(3000);
    console.log("Aplicação online!");
})
