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
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateProject = (formData, projectId) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${projectId}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
