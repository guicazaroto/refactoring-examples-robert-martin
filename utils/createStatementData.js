module.exports = function createStatementData(invoice, plays) {
  const result = {}
  result.customer = invoice.customer
  result.performances = invoice.performances.map(enrichPerformance)
  result.totalAmount = totalAmount(result)
  result.totalVolumeCredits = totalVolumeCredits(result)

  return result

  function enrichPerformance(thePerformance) {
    const result = Object.assign({}, thePerformance)
    result.play = playFor(result)
    result.amount = amountFor(result)
    result.volumeCredits = volumeCreditsFor(result)
    return result
  }
  
  function playFor (thePerformance) {
    return plays[thePerformance.playID]
  }

  function amountFor (thePerformance) {
    let result = 0

    switch(thePerformance.play.type) {
      case 'tragedy':
        result = 4000
        if (thePerformance.audience > 30) {
          result += 1000 * (thePerformance.audience - 30)
        }
        break;
      case 'comedy':
        result = 30000
        if (thePerformance.audience > 20) {
          result += 10000 + 500 * (thePerformance.audience - 20)
        }
        result += 300 * thePerformance.audience
        break;
      default:
        throw new Error(`unknown type: ${play.type}`)
    }

    return result
  }

  function volumeCreditsFor (thePerformance) {
    let result = 0
    result += Math.max(thePerformance.audience - 30, 0)
    if ('comedy' === thePerformance.play.type) result += Math.floor(thePerformance.audience / 5)    

    return result
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0)
  }

  function totalVolumeCredits (data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
  }
}
