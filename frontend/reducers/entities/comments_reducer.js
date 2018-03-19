import {RECEIVE_COMMENT,DELETE_COMMENT, RECEIVE_ALL_COMMENTS} from '../../actions/comments_actions';
import {RECEIVE_PROJECT} from '../../actions/projects_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case RECEIVE_PROJECT:
      return merge({}, action.payload.comments);
    case DELETE_COMMENT:
      let curr = merge({}, state);
      delete curr[action.commentId];
      return curr;
    default:
      return state;
  }
};

export default commentsReducer;
