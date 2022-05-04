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

module.exports = Park;