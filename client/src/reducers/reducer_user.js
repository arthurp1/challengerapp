import { REQUEST_USER, RECEIVE_USER } from '../actions/index'
import { fakeuser } from './fakedata'

const initialState = {
   fetching: false,
   user: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      console.log('no action')
    case REQUEST_USER:
      console.log('REQUEST_USER called')
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_USER:
      // return state.concat([action.user])
      // return [ action.user, ...state ];
      console.log('RECEIVE_USER called')
      return Object.assign({}, state, {
        fetching: false,
        // payload: action.payload.data
        payload: fakeuser
      })
  }
  return state;
}
