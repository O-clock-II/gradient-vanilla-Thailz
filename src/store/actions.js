// Je définis dans des variables les différents
// types d'action que je veux gérer.

export const RAND_FIRST = 'RAND_FIRST';
export const RAND_LAST = 'RAND_LAST';
export const TO_LEFT = 'TO_LEFT';
export const TO_RIGHT = 'TO_RIGHT';
// Je me fabrique des fonctions dont le job
// va être de me return des objets d'actions
// parfaitement formattés

// ACTION CREATOR
export const randFirst = (randomColor) => ({
  type: RAND_FIRST,
  color: randomColor,
});

export const randLast = (color) => ({
  type: RAND_LAST,
  color,
});

export const toLeft = () => ({
  type: TO_LEFT,
});

export const toRight = () => ({
  type: TO_RIGHT,
});
