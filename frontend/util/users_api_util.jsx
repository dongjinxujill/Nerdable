export const fetchAllUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};

export const fetchUser = id => {
  // debugger
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};
