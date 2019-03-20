app.component("appInfo", {
    templateUrl: "components/info/info.component.html",
    controller: "InfoController",
    bindings: {
    }
});


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "info",
        url: "/info",
        component: "appInfo"
    });

    $urlRouterProvider.otherwise("/info");
});


app.controller("InfoController", function() {

});