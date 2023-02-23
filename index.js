// Import stylesheets
import './style.css';

// Write Javascript code!
const numbers = [45, 4, 9, 16, 25];

let txt = '';
for (let x in numbers) {
  txt += numbers[x] + '<br>';
}

document.getElementById('demo').innerHTML = txt;

console.log(typeof txt);
console.log(typeof numbers);
