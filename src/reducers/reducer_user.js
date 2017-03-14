import { REQUEST_USER, RECEIVE_USER } from '../actions/index'

const initialState = {
   fetching: false,
   user: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_USER:
      // return state.concat([action.user])
      // return [ action.user, ...state ];
      return Object.assign({}, state, {
        fetching: false,
        user: action.user
      })
  }
  return state;
}
