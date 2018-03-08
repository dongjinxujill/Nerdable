export const fetchAllProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const createProject = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateProject = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${formData.id}`,
    data: formData,
    contentType: false,
    processData: false
  });
}

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
}
