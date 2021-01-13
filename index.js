/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeStr) {
  let currentTime = timeStr.split(':');
  let currentHour = parseInt(currentTime[0]);
  if (currentHour < 12) {
    return "Good Morning";
  }
  else if (currentHour > 17) {
    return "Good Evening";
  }
    return "Good Afternoon";
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}