const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { create, index } = require("./src/animalController");

const animals = readJSONFile("./data", "animals.json");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const animal = process.argv[3];

  let writeToFile = false;
  let updatedAnimals = [];

  switch (action) {
    case "index":
      const animalsView = index(animals);
      inform(animalsView);
      break;
    case "create":
      updatedAnimals = create(animals, animal);
      writeToFile = true;
      break;
    case "show":
      inform(action, animal);
      break;
    case "update":
      inform(action, animal);
      break;
    case "destroy":
      inform(action, animal);
      break;
    case "score":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "animals.json", updatedAnimals);
  }
}

run();
