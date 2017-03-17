import axios from 'axios';

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'

export function fetchUser() {
  requestUser()
  const request = axios.get('https://randomuser.me/api/')
  console.log('Request:', request);
  return {
    type: RECEIVE_USER,
    payload: request
  };
}


function requestUser() {
  return { type: 'REQUEST_USER' }
}
