export const fetchAllUsers = users => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};
