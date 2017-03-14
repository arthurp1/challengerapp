import axios from 'axios';

export function fetchUser() {
   return dispatch => {
      dispatch(requestUser());
      axios.get('https://randomuser.me/api/')
      .then(function(res) {
        dispatch(receiveUser(res.data.results))
        console.log(res.data.results)
      })
    }
}

function requestUser() {
  return { type: 'REQUEST_USER' }
}

function receiveUser(user) {
   return { type: 'RECEIVE_USER', user: user };
}

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
