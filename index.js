const main = document.getElementById('main');
if (main) {
  main.remove();
}

window.newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Ian Muthiani is the champion';

document.body.appendChild(newHeader);