// pessoa.controller.js
angular
    .module("save-room-system")
    .controller("personController", (personService) => {
        this.novo = {};

        this.listAll = () => personService.getPerson()
            .then( (ret) => this.list = ret.data);
    
    });