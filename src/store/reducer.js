import {
  RAND_FIRST, RAND_LAST, TO_LEFT, TO_RIGHT,
} from './actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// Mon reducer est une fonction qui DOIT return quoi qu'il arrive
// un state

export default (state = initialState, action = {}) => {
  // Je veux examiner l'action reçue, et en fonction
  // de son type (ex: INCREMENT_COUNTER)
  // Je vais return un state modifié
  switch (action.type) {
    case TO_LEFT:
      return {
        ...state,
        direction: '270deg',
      };
    case TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };
    case RAND_FIRST:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case RAND_LAST:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};
