"use strict";

app.factory("Taetigkeit", function() {

    function Taetigkeit(person, taetigkeit) {
        this.person = person;
        this.taetigkeit = taetigkeit;

        this.isRunning = false;
        this.lastStartTime = null;
        this.entireTime = 0;

        this.initAfterLoad = (isRunning, lastStartTime, entireTime) => {
          this.isRunning = isRunning;
          this.lastStartTime = lastStartTime;
          this.entireTime = entireTime;
          if(lastStartTime && isRunning) {
              this.entireTime += (Date.now() - this.lastStartTime);
              this.lastStartTime = Date.now();
          }
        };

        this.getAll = () => {
            return {
                person: this.person,
                taetigkeit: this.taetigkeit
            }
        };

        this.stop = () => {
            this.isRunning = false;
        };

        this.start = () => {
            this.isRunning = true;
            this.lastStartTime = Date.now();
        };

        this.getTime = () => {
            return this.entireTime;
        };

        this.updateTime = () => {
            if(this.isRunning) {
                this.entireTime += 1000;
            }
            console.log(this.entireTime);
        }

    }


    return Taetigkeit;
});
