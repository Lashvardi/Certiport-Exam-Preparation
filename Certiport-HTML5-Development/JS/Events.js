let button = document.querySelector('#myButton');

button.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  
  console.log('Button clicked!');
  
  document.body.classList.add('button-clicked');
}

button.addEventListener('mouseenter', handleMouseEnter);
button.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter(event) {
  event.target.classList.add('hover');
}

function handleMouseLeave(event) {
  event.target.classList.remove('hover');
}
