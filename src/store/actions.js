// Je définis dans des variables les différents
// types d'action que je veux gérer.

export const RAND_FIRST = 'RAND_FIRST';
export const RAND_LAST = 'RAND_LAST';
export const TO_LEFT = 'TO_LEFT';
export const TO_RIGHT = 'TO_RIGHT';

export const TO_45DEG = 'TO_45DEG';
export const TO_135DEG = 'TO_135DEG';
export const TO_225DEG = 'TO_225DEG';
export const TO_315DEG = 'TO_315DEG';

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

export const to45 = () => ({
  type: TO_45DEG,
});
export const to135 = () => ({
  type: TO_135DEG,
});
export const to225 = () => ({
  type: TO_225DEG,
});
export const to315 = () => ({
  type: TO_315DEG,
});
export const toRight = () => ({
  type: TO_RIGHT,
});
