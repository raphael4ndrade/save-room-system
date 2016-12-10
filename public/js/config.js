// config.js
angular
    .module("save-room-system", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider.
            when("/", {
                controller : "js/salaController",
                templateUrl: "template/sala.html",
                controllerAs: "ctl"
            })
            when("/pessoa", {
                controller : "pessoaController",
                templateUrl: "template/pessoa.html",
                controllerAs: "ctl"
            })
            when("sala", {
                controller : "reservaController",
                templateUrl: "template/reserva.html",
                controllerAs: "ctl"
            })
            otherwise("/");
    })