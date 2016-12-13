const express = require("express");
const knex = require("./db");
const bodyparse = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparse.json());

// app routing...
app.get("/room", (req, res) => {
        knex("room").select().then((ret) => res.send(ret));
    })
    .get("/person", (req, res) =>{
        knex("person").select().the((ret) => res.send(ret));
    })
    .post("/room", (req, res) => {
        let localdata = req.body;
        let notExist = knex("room").where("id_room", ret[0]);
        console.log(notExist);

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
        knex("person").insert(localdata, "id_person").then( (ret) => {
            localdata.id_person = ret[0];
            res.send(localdata);
        }).catch( (err) => {
            res.status(500).send(err);
            console.log(err);
        });
    })
    .post("/room_person", (req, res) => {
        let localdata = req.body;
        knex("roo_person").insert({
            id_room : localdata.id_room,
            id_person : localdata.id_person
        }).then( (ret) => {
            res.send("OK!");
        }).catch( (err) =>{
            res.status(500).send(err);
            console.log(err);
        })
});

knex.migrate.latest().then( ()=> {
    app.listen(3000);
    console.log("Aplicação online!");
})
