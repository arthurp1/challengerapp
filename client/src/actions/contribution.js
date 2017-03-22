import axios from 'axios';

export const SET_CONTRIBUTION = 'SET_CONTRIBUTION'

export function setContribution(user_id, challenge_id, amount) {
  const contribution = {
    user_id,
    challenge_id,
    amount
  }
  // const request = axios.post('/setcontribution', contribution)
  console.log('Contribution:', contribution);
  return {
    type: SET_CONTRIBUTION,
    payload: contribution
  };
}
