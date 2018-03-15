import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchAllUsers = () => dispatch => (
  UsersApiUtil.fetchAllUsers().then(
    users=>dispatch(receiveAllUsers(users))
  )
);

//
export const fetchUser = (id) => dispatch => {
  // debugger
  return UsersApiUtil.fetchUser(id).then(
    user=>dispatch(receiveUser(user))
  )
};
