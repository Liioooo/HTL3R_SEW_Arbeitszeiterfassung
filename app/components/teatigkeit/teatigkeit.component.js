app.component("appTeatigkeit", {
    templateUrl: "components/teatigkeit/teatigkeit.component.html",
    controller: "TeatigkeitController",
    bindings: {
        teatigkeit: "="
    }
});


app.controller("TeatigkeitController", function(TeatigkeitenService) {

    this.delete = () => {
        TeatigkeitenService.remove(this.teatigkeit);
    };

});
