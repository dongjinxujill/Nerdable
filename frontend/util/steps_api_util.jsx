export const fetchStep = id => (
  $.ajax({
    method: 'GET',
    url: `/api/steps/${id}`
  })
);

export const createStep = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateStep = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/steps/${formData.id}`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteStep = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/steps/${id}`
  });
};
