const Park = function (inputName, inputTicketPrice, inputDinosaurs) {
  this.name = inputName;
  this.ticketPrice = inputTicketPrice;
  this.dinosaurs = inputDinosaurs;
}

Park.prototype.addDino = function (dinoObject) {
  this.dinosaurs.push(dinoObject);
}

Park.prototype.removeDino = function (index) {
  this.dinosaurs.slice(index, 1);
}

Park.prototype.mostPopularDino = function () {
  let mostPopular = null;
  let baseVisitors = 0;

  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > baseVisitors) {
      mostPopular = dinosaur;
      baseVisitors = dinosaur.guestsAttractedPerDay;
    }
  }

  return mostPopular;
}

module.exports = Park;