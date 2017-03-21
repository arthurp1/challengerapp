import axios from 'axios';

export const SET_CONTRIBUTION = 'SET_CONTRIBUTION'
export const EXTRA_CONTRIBUTION = 'EXTRA_CONTRIBUTION'

export function setContribution(user_id, challenge_id, amount) {
  const contribution = {
    user_id,
    challenge_id,
    amount
  }
  const request = axios.post('/setcontribution', contribution)
  console.log('Request:', contribution);
  return {
    type: SET_CONTRIBUTION,
    payload: contribution
  };
}


function requestUser() {
  return { type: 'REQUEST_USER' }
}
