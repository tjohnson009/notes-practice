// a <p> with red text that says “Hey I’m red!”
const container = document.querySelector('#container'); 

const p = document.createElement('p'); 
p.classList.toggle('red');
p.textContent = `Hey I'm red`; 
p.setAttribute('style', 'color: red'); 
container.appendChild(p); 
// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3'); 
h3.style.color = 'blue'; 
h3.textContent = `I'm a blue h3`; 
container.appendChild(h3); 
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

