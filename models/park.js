const Park = function (inputName, inputTicketPrice, inputDinosaurs) {
  this.name = inputName;
  this.ticketPrice = inputTicketPrice;
  this.dinosaurs = inputDinosaurs;
}

Park.prototype.addDino = function (dinoObject) {
  this.dinosaurs.push(dinoObject);
}

module.exports = Park;