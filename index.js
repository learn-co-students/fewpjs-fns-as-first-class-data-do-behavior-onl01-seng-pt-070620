/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(arg) {
  let time = parseInt(arg.split(':')[0])
  if (time < 12) {
    displayMessage('Good Morning')
    return 'Good Morning'
  }
  else if (time === 12 || time > 12 && time < 17 ) {
    displayMessage('Good Afternoon')
    return 'Good Afternoon'
  }
  else {
    displayMessage('Good Evening')
    return 'Good Evening'
  }
}

function displayMessage(arg) {
  document.getElementById('greeting').innerText = `${arg}`
}