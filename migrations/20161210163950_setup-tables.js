exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("person", (table)=> {
        table.increments("id_person");
        table.string("name_person", 100).notNullable();
        table.integer("age_person");
    }).createTableIfNotExists("room", (table) =>{
        table.string("id_room").primary().unique().notNullable();
        table.string("desc_room").notNullable();
    }).createTableIfNotExists("room_person", (table)=> {
        table.string("id_room").references("room.id_room");
        table.integer("id_person").references("person.id_person");
        table.primary(["id_room", "id_person"]);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("room_person")
        .dropTable("room")
        .dropTable("person");
};
