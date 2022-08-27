import PerformanceCalculator from './PerformanceCalculator.js'

export default class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000
    if (this.thePerformance.audience > 20) {
      result += 10000 + 500 * (this.thePerformance.audience - 20)
    }
    result += 300 * this.thePerformance.audience

    return result
  }

  get volumeCredits () {
    return Math.floor(this.thePerformance.audience / 5)    
  }
}