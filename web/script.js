const apiUrl = 'https://roboweb-tt7k.onrender.com';

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const garraButton = document.getElementById('garra-button');

function fazerRequisicao(jsonData) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .catch(error => console.error('Erro ao fazer requisição:', error));
}

leftButton.addEventListener('click', () => {
  const jsonData = {
    "up": 0,
    "down": 0,
    "right": 0,
    "left": 1,
    "garra": 0
    };
  fazerRequisicao(jsonData);
});

rightButton.addEventListener('click', () => {
  const jsonData = {
    "up": 0,
    "down": 0,
    "right": 1,
    "left": 0,
    "garra": 0
    };
  fazerRequisicao(jsonData);
});

upButton.addEventListener('click', () => {
  const jsonData = {
    "up": 1,
    "down": 0,
    "right": 0,
    "left": 0,
    "garra": 0
    };
  fazerRequisicao(jsonData);
});

downButton.addEventListener('click', () => {
  const jsonData = {
    "up": 0,
    "down": 1,
    "right": 0,
    "left": 0,
    "garra": 0
    };;
  fazerRequisicao(jsonData);
});

garraButton.addEventListener('click', () => {
  const jsonData = {
    "up": 0,
    "down": 0,
    "right": 0,
    "left": 0,
    "garra": 1
    };
  fazerRequisicao(jsonData);
});