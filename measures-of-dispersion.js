class DispersionCalculator {
  constructor(data) {
    this.data = data;
  }
  
  calculateVariance() {
    const mean = this.calculateMean();
    const deviations = this.data.map(x => (x - mean) ** 2);
    const variance = deviations.reduce((accumulator, currentValue) => accumulator + currentValue) / this.data.length;
    return variance;
  }
  
  calculateStandardDeviation() {
    const variance = this.calculateVariance();
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
  }
  
  calculateRange() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    const range = max - min;
    return range;
  }
  
  calculateMeanAbsoluteDeviation() {
    const mean = this.calculateMean();
    const deviations = this.data.map(x => Math.abs(x - mean));
    const meanAbsoluteDeviation = deviations.reduce((accumulator, currentValue) => accumulator + currentValue) / this.data.length;
    return meanAbsoluteDeviation;
  }
  
  calculateCoefficientOfVariation() {
    const mean = this.calculateMean();
    const standardDeviation = this.calculateStandardDeviation();
    const coefficientOfVariation = (standardDeviation / mean) * 100;
    return coefficientOfVariation;
  }
  
  calculateMean() {
    const sum = this.data.reduce((accumulator, currentValue) => accumulator + currentValue);
    const mean = sum / this.data.length;
    return mean;
  }
}

const data = [2, 4, 6, 8, 10];
const calculator = new DispersionCalculator(data);

console.log('Variance:', calculator.calculateVariance());
console.log('Standard Deviation:', calculator.calculateStandardDeviation());
console.log('Range:', calculator.calculateRange());
console.log('Mean Absolute Deviation:', calculator.calculateMeanAbsoluteDeviation());
console.log('Coefficient of Variation:', calculator.calculateCoefficientOfVariation());
