/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeStr) {
  let timeInt = parseInt(timeStr,10)
  if ( timeInt < 12) return "Good Morning"
  if ( timeInt > 17) return "Good Evening"
  return "Good Afternoon"

}
/* Write your implementation of displayMessage() */

function displayMessage(argString){
  document.getElementById("greeting").innerText = argString

}

