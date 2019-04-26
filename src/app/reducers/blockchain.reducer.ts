import { Blockchain } from './../blockchain/blockchain.model';

// action type
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';

// reducer function
  // pure function that always returns a new state
    // reducers never modify the old state of an application
export function addCoinReducer(state: Blockchain[] = [], action) {
  switch (action.type) {
    case ADD_COIN:
      return [...state, action.payload];
    case REMOVE_COIN:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}
