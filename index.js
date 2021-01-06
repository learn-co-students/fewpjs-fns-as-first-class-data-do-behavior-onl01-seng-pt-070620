/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hourOfTheDay = parseInt(time, 0)
if (hourOfTheDay < 12) return 'Good Morning';
if (hourOfTheDay > 17) return 'Good Evening'
return 'Good Afternoon'
}
/* Write your implementation of displayMessage() */
function displayMessage(m) {
  document.getElementById("greeting").innerText = m;
}