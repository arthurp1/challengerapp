import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import ContributionReducer from './reducer_contribution'

const rootReducer = combineReducers({
  user: UserReducer,
  contribution: ContributionReducer
});

export default rootReducer;
