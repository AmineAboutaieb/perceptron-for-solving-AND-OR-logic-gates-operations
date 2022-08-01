let activation = (num) => {
  return num >= 1 ? 1 : 0;
};

class Perceptron {
  lr = 0.1;
  w1;
  w2;

  constructor() {
    this.w1 = Math.random();
    this.w2 = Math.random();
  }

  guess(i1, i2) {
    let sum = i1 * this.w1 + i2 * this.w2;
    return activation(sum);
  }

  train(i1, i2, target) {
    let guess = this.guess(i1, i2);
    let error = target - guess;

    this.w1 += error * i1 * this.lr;
    this.w2 += error * i2 * this.lr;
  }
}

module.exports.Perceptron = Perceptron;
