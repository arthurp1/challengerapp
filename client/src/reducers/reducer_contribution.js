import { SET_CONTRIBUTION } from '../actions/contribution'
import { contribution } from './fakedata'

const initialState = {
   contributed: false,
   contribution: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      console.log('no action')
    case SET_CONTRIBUTION:
      console.log('SET_CONTRIBUTION called')
      return Object.assign({}, state, {
        // d
        contributed: true,
        payload: contribution
      });
  }
  return state;
}
