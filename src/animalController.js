const { nanoid } = require("nanoid");
const animalPoints = require("../data/animalPoints.json");

function create(animals, animalName) {
  const animal = {
    name: animalName,
    id: nanoid(4),
    points: animalPoints[animalName] || 10,
  };
  animals.push(animal);
  return animals;
}

module.exports = {
  create,
};
