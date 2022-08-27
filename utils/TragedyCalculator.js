import PerformanceCalculator from './PerformanceCalculator.js'

export default class TragedyCalculator extends PerformanceCalculator {
  get amount () {
    let result = 4000
    if (this.thePerformance.audience > 30) {
      result += 1000 * (this.thePerformance.audience - 30)
    }

    return result
  }
}