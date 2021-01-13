/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){

  const hour = parseInt(time.split(':')[0]);
  let greeting;

  if (hour < 12){
    greeting = "Good Morning";
  } else if (hour <= 17){
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}

function greetingFunction(){
  const time = document.getElementById("time").value;
  displayMessage(greet(time));
}
