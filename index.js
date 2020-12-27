/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let f = string.split(":");
  let timeString = f[0] + f[1];
  let time = parseInt(timeString);
  let m;

  if (time < 1200) {
    m = "Good Morning";
  } else if (time >= 1200 && time < 1700) {
    m = "Good Afternoon";
  } else if (time >= 1700) {
    m = "Good Evening";
  }
  return m;
  

}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let d = document.getElementById("greeting");
  d.innerText = string;

}