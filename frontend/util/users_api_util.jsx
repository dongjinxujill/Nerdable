export const fetchAllUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};

export const fetchUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};
