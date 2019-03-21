app.service("TeatigkeitenService", function(Taetigkeit, $interval) {


    $interval(() => {
        taetigkeiten.forEach(t => {
            t.updateTime();
        });
        this.allTimes = taetigkeiten.reduce((time, t2) => time + t2.getTime(), 0);
        this.save();
    }, 1000);


    let taetigkeiten = load();
    this.allTimes = 0;

    this.add = (person, taetigkeit) => {
        taetigkeiten.push(new Taetigkeit(person, taetigkeit));
        this.save();
    };

    this.getAll = () => {
        return taetigkeiten;
    };

    this.remove = (taetigkeit) => {
        taetigkeiten = taetigkeiten.filter(t => t !== taetigkeit);
        this.save();
    };

    this.save = () => {
        localStorage.setItem('works', JSON.stringify(taetigkeiten));
    };

    function load() {
      let items = localStorage.getItem('works');
      if(!items) {
          return [];
      }
      items = JSON.parse(items);
      const taet = [];
      items.forEach(item => {
        const t = new Taetigkeit(item.person, item.taetigkeit);
        t.initAfterLoad(item.isRunning, item.lastStartTime, item.entireTime);
        taet.push(t)
      });
      return taet;
    }

});
