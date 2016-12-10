// sala.controller.js
angular
    .module("save-room-system")
    .controller("roomController", (roomService) => {
        this.newer = {};

        this.listAll = () => roomService.getRooms()
            .then( (ret) => this.list = ret.data);

        this.listAll();

        this.salvarSala = () => {
            roomService.salvarSala(this.newer)
                .then( (ret) => {
                    alert("Sala registrada com sucesso!");
                    this.listAll();
                    this.newer = {};
                });
        };
    });