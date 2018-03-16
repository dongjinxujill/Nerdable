import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT} from '../../actions/projects_actions';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../../actions/users_actions';
import {RECEIVE_ALL_COMMENTS} from '../../actions/comments_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.payload.users);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user}, action.payload.users);
    case REMOVE_PROJECT:
      const curr = merge({}, state);
      curr[curr.author_id].project_ids.map((projectId,idx)=>{
        if (projectId === action.projectId){
          delete curr[curr.author_id].project_ids[idx];
        }
      });
       // curr[curr.author_id].project_ids.filter(projectId=>projectId!==action.projectId);
      return curr;
    // case RECEIVE_ALL_COMMENTS:
    //   return merge({}, state,action.payload.users);
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
