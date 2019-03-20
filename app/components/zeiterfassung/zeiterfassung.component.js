app.component("appZeiterfassung", {
    templateUrl: "components/zeiterfassung/zeiterfassung.component.html",
    controller: "ZeiterfassungController",
    bindings: {
    }
});


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "zeiterfassung",
        url: "/zeiterfassung",
        component: "appZeiterfassung"
    });
});


app.controller("ZeiterfassungController", function() {

});