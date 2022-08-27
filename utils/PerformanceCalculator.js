export default class PerformanceCalculator {
  constructor (thePerformance, play) {
    this.thePerformance = thePerformance
    this.play = play
  }

  get amount () {
    throw new Error('subclass responsibility');
  }

  get volumeCredits () {
    return Math.max(this.thePerformance.audience - 30, 0)
  }
}