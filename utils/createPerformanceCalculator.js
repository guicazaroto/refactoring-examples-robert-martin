import ComedyCalculator from "./ComedyCalculator.js";
import TragedyCalculator from "./TragedyCalculator.js";

export default function createPerformanceCalculator(performance, play) {
  switch(play.type) {
    case "tragedy": return new TragedyCalculator(performance, play);
    case "comedy": return new ComedyCalculator(performance, play);
    default:
      throw new Error(`unknown type: ${play.type}`)
  }
}