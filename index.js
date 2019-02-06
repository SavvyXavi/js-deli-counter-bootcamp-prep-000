function takeANumber(katzDeliLine, lineName){
  katzDeliLine.push(lineName)
  return "Welcome, " + lineName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
if (katzDeliLine[0] === "Steven") {
  return "Currently serving " + katzDeliLine.shift() + ".";
} else {
  return "There is nobody waiting to be served!"
}
 }

function currentLine(katzDeliLine){

}
