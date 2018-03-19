export const fetchSteps = (projectId) => (
  $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/steps`,
  })
);

export const fetchStep = id => (
  $.ajax({
    method: "GET",
    url: `/api/steps/${id}`,
  })
);

export const createStep = step => (
  $.ajax({
    method: "POST",
    url: "/api/steps",
    data: {step}
  })
);

export const updateStep = (formData, stepId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/steps/${stepId}`,
    contentType: false,
    processData: false,
    data: formData
  })
};

export const deleteStep = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${id}`
  })
);
