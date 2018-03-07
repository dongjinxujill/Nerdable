import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  projects: projectsReducer,
  users: usersReducer
});

export default entitiesReducer;
