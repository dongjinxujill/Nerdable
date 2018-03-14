import * as CommentsApiUtil from '../util/comments_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
});

const receiveCommentErrors = (errors) => {
  // debugger
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS
});


export const fetchAllComments = (projectId) => dispatch => (
  CommentsApiUtil.fetchComments(projectId).then(comments => {
    return dispatch(receiveAllComments(comments));
  })
);

export const createComment = comment => dispatch => (
  CommentsApiUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveCommentErrors(err.responseJSON))
));

export const updateComment = comment => dispatch => (
  CommentsApiUtil.updateComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveCommentErrors(err.responseJSON))
));

export const deleteComment = id => dispatch => {
  // debugger
  return CommentsApiUtil.deleteComment(id).then(
    () => dispatch(removeComment(id)),
    err => dispatch(receiveCommentErrors(err.responseJSON))
  );
};
