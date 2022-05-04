const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1, dinosaur2, dinosaur3, park1;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("species1", "carnivore", 200);
    dinosaur2 = new Dinosaur("species2", "herbivore", 500);
    dinosaur3 = new Dinosaur("species3", "omnivore", 900)

    park1 = new Park("Park1", 29.99, [dinosaur1, dinosaur2]);
  })

  it('should have a name', function () {
    const actual = park1.name;
    assert.strictEqual(actual, "Park1");
  });

  it('should have a ticket price', function () {
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 29.99);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park1.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park1.addDino(dinosaur3);
    const actual = park1.dinosaurs.indexOf(dinosaur3);
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
