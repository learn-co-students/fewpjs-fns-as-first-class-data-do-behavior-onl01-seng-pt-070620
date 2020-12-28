/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  let begin = time.split(":")
  begin = parseInt(begin)
  if(begin >= 0 && begin < 12){
    return "Good Morning"
  }else if (begin >= 12 && begin < 17){
    return "Good Afternoon"
  }else if (begin > 17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = (string) => {
  document.querySelector('#greeting').innerText = string
}
