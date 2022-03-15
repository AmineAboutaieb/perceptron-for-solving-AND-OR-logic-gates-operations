const { Perceptron } = require("./Perceptron");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let andTrainingSet = [
  [1, 1, 1],
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

let orTrainingSet = [
  [1, 1, 1],
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0],
];

readline.question(`Train for AND or OR logic gate (a/o) : `, (answer) => {
  if (answer == "a" || answer == "o") {
    let perceptron = new Perceptron();
    let trainingIterations = 0;
    let trainingLoop = setInterval(() => {
      errorCounter = 0;
      trainingIterations++;
      if (answer == "o") {
        orTrainingSet.forEach((item) => {
          let guess = perceptron.guess(item[0], item[1]);
          if (item[2] != guess) {
            errorCounter++;
          }
          console.log(
            `${item[0]} && ${item[1]} : ${item[2]}`,
            `perceptron guessed ${guess}, ${
              item[2] != guess ? "FALSE" : "TRUE"
            }`
          );
          perceptron.train(item[0], item[1], item[2]);
        });
      } else if (answer == "a") {
        andTrainingSet.forEach((item) => {
          let guess = perceptron.guess(item[0], item[1]);
          if (item[2] != guess) {
            errorCounter++;
          }
          console.log(
            `${item[0]} && ${item[1]} : ${item[2]}`,
            `perceptron guessed ${guess}, ${
              item[2] != guess ? "FALSE" : "TRUE"
            }`
          );
          perceptron.train(item[0], item[1], item[2]);
        });
      }
      console.log("--------------------------------------------");
      if (errorCounter == 0) {
        clearInterval(trainingLoop);
        console.log(`Training iterations : ${trainingIterations}`);
      }
    }, 1000);
  } else {
    console.log("Either enter a for AND or o for OR");
  }
  readline.close();
});
