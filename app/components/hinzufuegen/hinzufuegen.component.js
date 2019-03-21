app.component("appHinzufuegen", {
    templateUrl: "components/hinzufuegen/hinzufuegen.component.html",
    controller: "HinzufuegenController",
    bindings: {
        hideAdder: "&"
    }
});


app.controller("HinzufuegenController", function(TeatigkeitenService) {

    this.hide = () => {
        this.hideAdder({show: false});
    };

    this.addWork = () => {
        if(this.addForm.person.$invalid || this.addForm.taetigkeit.$invalid) {
            return;
        }
        TeatigkeitenService.add(this.addForm.person.$viewValue, this.addForm.taetigkeit.$viewValue);
        this.hideAdder({show: false});
    }

});
