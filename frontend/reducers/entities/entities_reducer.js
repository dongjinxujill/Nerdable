import projectsReducer from './projects_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  projects: projectsReducer
});

export default entitiesReducer;
