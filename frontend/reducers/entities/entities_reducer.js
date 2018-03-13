import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';
import stepsReducer from './steps_reducer';
import searchReducer from './search_reducer';
import commentsReducer from './comments_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  projects: projectsReducer,
  steps: stepsReducer,
  users: usersReducer,
  search: searchReducer,
  comments: commentsReducer
});

export default entitiesReducer;
