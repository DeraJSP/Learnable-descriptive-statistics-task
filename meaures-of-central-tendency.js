class MeasuresOfCentralTendency {
  constructor(data) {
    this.data = data;
  }

  mean() {
    const sum = this.data.reduce((acc, curr) => acc + curr, 0);
    return sum / this.data.length;
  }

  median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  mode() {
    const countMap = new Map();
    let maxValue = 0;
    let modeValues = [];

    for (const value of this.data) {
      const count = countMap.get(value) || 0;
      const newCount = count + 1;
      countMap.set(value, newCount);

      if (newCount > maxValue) {
        maxValue = newCount;
        modeValues = [value];
      } else if (newCount === maxValue) {
        modeValues.push(value);
      }
    }

    return modeValues;
  }
}

const numbers = [2, 2, 3, 4, 5, 5, 5, 6, 7, 8];
const measures = new MeasuresOfCentralTendency(numbers);

console.log('Mean:', measures.mean()); // Output: Mean: 5
console.log('Median:', measures.median()); // Output: Median: 5
console.log('Mode:', measures.mode()); // Output: Mode: [5]