export const fetchSteps = () => (
  $.ajax({
    method: "GET",
    url: "/api/steps",
  })
);

export const fetchStep = id => (
  $.ajax({
    method: "GET",
    url: `/api/steps/${id}`,
  })
);

export const createStep = formData => (
  $.ajax({
    method: "POST",
    url: "/api/steps",
    contentType: false,
    processData: false,
    data: formData
  })
);

export const updateStep = step => (
  $.ajax({
    method: "PATCH",
    url: `/api/steps/${step.id}`,
    contentType: false,
    processData: false,
    data: { step }
  })
);

export const deleteStep = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${id}`
  })
);
