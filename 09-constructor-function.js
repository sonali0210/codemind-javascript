function Player(name,totalRuns,ranking) {
    this.name = name;
    this.totalRuns = totalRuns;
    this.ranking = ranking;
    // this.details = function() {
    //     console.log(`Name: ${this.name}, Total Runs: ${this.totalRuns}, Country: ${this.country}`);
    // }
}
Player.prototype.country = "India";
const player1 = new Player("Virat Kohli", "40K", 1);
console.log(player1);

const player2 = new Player("M S Dhoni", "30K", 3);
console.log(player2);

const player3 = new Player("V Sehwag", "25K", 11);
console.log(player3);

const player4 = new Player("Sachin Tendulkar", "80K", 5);
console.log(player4);

const player5 = new Player("Suryavanshi", "30K", 4);
console.log(player5);

console.log(player5.country);
