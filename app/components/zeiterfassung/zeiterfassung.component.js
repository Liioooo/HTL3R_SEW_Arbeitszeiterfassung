app.component("appZeiterfassung", {
    templateUrl: "components/zeiterfassung/zeiterfassung.component.html",
    controller: "ZeiterfassungController",
    bindings: {
    }
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "zeiterfassung",
        url: "/zeiterfassung",
        component: "appZeiterfassung"
    });
});


app.controller("ZeiterfassungController", function(TeatigkeitenService) {

    this.currentlyAdding = false;

    this.getTeatigkeiten = ()  => {
      return TeatigkeitenService.getAll() || [];
    };

    this.allTimes = () => {
        return TeatigkeitenService.allTimes;
    }
});
