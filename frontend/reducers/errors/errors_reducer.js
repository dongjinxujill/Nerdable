import { combineReducers } from 'redux';

import sessionErrorsReducer from '../errors/session_errors_reducer';
import projectErrorsReducer from '../errors/project_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: projectErrorsReducer
});

export default errorsReducer;
