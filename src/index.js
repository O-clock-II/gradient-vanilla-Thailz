// == Imports
import store from './store';
import { randomHexColor, generateSpanColor } from './utils';
import {
  randFirst, randLast, toLeft, toRight, to45, to135, to225, to315,
} from './store/actions';
// == State
// Executer store.getState() va
// TOUJOURS me return l'état actuel du state

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  

  if (direction === '90deg') {
    const result = `${firstSpan} → ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }
  else if (direction === '45deg') {
    const result = `${firstSpan} \u2197 ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }
  else if (direction === '135deg') {
    const result = `${firstSpan} \u2198 ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }
  else if (direction === '270deg') {
    const result = `${firstSpan} \u2199 ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }
  else if (direction === '225deg') {
    const result = `${firstSpan} \u2196 ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }
  else if (direction === '315deg') {
    const result = `${firstSpan} → ${lastSpan}`;
    document.getElementById('colors').innerHTML = result;
  }

}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// Le store me permet, à l'aide d'une méthode
// d'être informé que le state a changé.

store.subscribe(() => {
  // Cette fonction sera exécutée dés que le state a changé
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    const color1 = randomHexColor();
    const color2 = randomHexColor();
    store.dispatch(randFirst(color1));
    store.dispatch(randLast(color2));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    // Je veux envoyer l'action "FIRST_COLOR" jusqu'à
    // mon reducer
    // const newColor = e.target.value,
    const newColor = randomHexColor(); // #f0f
    // Dans notre app, on génère la couleur aléatoirement.
    // Mais  fondamentalement, je pourrais vouloir laisser mon user
    // choisir cette couleur (par exemple en la tapant dans un input text)
    // J'ai donc besoin de pouvoir faire remonter de la data (ici une couleur)
    // jusqu'à mon reducer, pour qu'il modifie le state avec cette data
    // Autres exemples, le texte tapé dans un input. L'élément choisi dans un dropDown
    // Le nom d'un article en cours de consultation.

    // L'action creator est une fonction que j'ai fabriqué. Je fais en sorte que
    // cette fonction puisse recevoir un / des paramètre(s) afin de les accrocher
    // à l'objet d'action fabriqué. Comme ça, vu que mon reducer reçoit les objets d'action
    // il peut revevoir avec la data (couleur, texte etc.) dont il a besoin pour modifier
    // le state
    store.dispatch(randFirst(newColor));
    // store.dispatch({
    //   type: 'RAND_FIRST',
    //   color: '#f0f'
    // });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const newColor = randomHexColor();
    store.dispatch(randLast(newColor));
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // state.direction = '270deg';
    store.dispatch(toLeft());
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // state.direction = '90deg';
    store.dispatch(toRight());
  });
//= ===========================================
//= ===========================================
//= ===========================================

document.getElementById('to45')
  .addEventListener('click', () => {
    // state.direction = '90deg';
    store.dispatch(to45());
  });

document.getElementById('to135')
  .addEventListener('click', () => {
    // state.direction = '90deg';
    store.dispatch(to135());
  });

document.getElementById('to225')
  .addEventListener('click', () => {
    // state.direction = '90deg';
    store.dispatch(to225());
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    // state.direction = '90deg';
    store.dispatch(to315());
  });

//= ===========================================
//= ===========================================
//= ===========================================

