/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let t = time.split(":"); 
  let timeString = t[0] + t[1];
  let parse = parseInt(timeString);
  let message;

  if (parse < 1200) { message = 'Good Morning'};
  if (parse > 1200 && parse < 1700) { message = 'Good Afternoon'};
  if (parse > 1700) {message = 'Good Evening'};

  return message

}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let find = document.querySelector('h1#greeting')
  find.innerText = string;

}
