import { combineReducers } from 'redux';

import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
