// config.js
angular.module("save-room-system", ["ngRoute"]);

angular.module("save-room-system").config(($routeProvider) => {
        $routeProvider.when("/reservas", {
                controller : "js/salaController",
                templateUrl: "templates/reservas.html",
                controllerAs: "ctl"
        });
        
        $routeProvider.when("/salas", {
                controller : "reservaController",
                templateUrl: "templates/salas.html",
                controllerAs: "ctl"
        });

        $routeProvider.when("/cadastrar-usuario", {
            controller: "js/usuarioControler",
            templateUrl: "templates/cadastrar-usuario.html",
            controllerAs: "ctl"
        });

        $routeProvider.otherwise("/reservas");
    });