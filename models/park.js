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

Park.prototype.findBySpecies = function (searchedSpecies) {
  let goodList = [];
  
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species == searchedSpecies) {
      goodList.push(dinosaur);
    }
  }

  return goodList;
}

Park.prototype.totalVisitorsDay = function () {
  let totalVisitors = 0;

  for (let dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }

  return totalVisitors;
}

Park.prototype.totalVisitorsYear = function () {
  let totalVisitors = 0;

  return this.totalVisitorsDay() * 365;
}

module.exports = Park;