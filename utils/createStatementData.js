import createPerformanceCalculator from "./createPerformanceCalculator.js"

export default function createStatementData(invoice, plays) {
  const result = {}
  result.customer = invoice.customer
  result.performances = invoice.performances.map(enrichPerformance)
  result.totalAmount = totalAmount(result)
  result.totalVolumeCredits = totalVolumeCredits(result)

  return result

  function enrichPerformance(thePerformance) {
    const calculator = createPerformanceCalculator(thePerformance, playFor(thePerformance))
    const result = Object.assign({}, thePerformance)
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }
  
  function playFor (thePerformance) {
    return plays[thePerformance.playID]
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0)
  }

  function totalVolumeCredits (data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
  }
}
