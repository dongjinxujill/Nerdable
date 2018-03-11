import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_PROJECT_ERRORS = 'CLEAR_PROJECT_ERRORS';

export const receiveAllProjects = (payload) => ({
  type: RECEIVE_ALL_PROJECTS,
  payload
});

export const receiveProject = (payload) => ({
  type: RECEIVE_PROJECT,
  payload
});

export const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId
});

export const receiveProjectErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const clearProjectErrors = () => ({
  type: CLEAR_PROJECT_ERRORS
});

export const fetchAllProjects = () => dispatch => (
  ProjectsApiUtil.fetchAllProjects().then(
    payload => dispatch(receiveAllProjects(payload)),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  )
);

export const fetchProject = (id) => dispatch => (
  ProjectsApiUtil.fetchProject(id).then(
    payload => dispatch(receiveProject(payload),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  ))
);

export const createProject = (project) => dispatch => (
  ProjectsApiUtil.createProject(project).then(
    project => dispatch(receiveProject(project)),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  )
);

export const updateProject = (project, projectId) => dispatch => (
  ProjectsApiUtil.updateProject(project, projectId).then(
    project => dispatch(receiveProject(project)),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  )
);

export const deleteProject = (id) => dispatch => (
  ProjectsApiUtil.deleteProject().then(
    () => dispatch(removeProject(id)),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  )
);
