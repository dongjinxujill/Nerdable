import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveAllProjects = payload => ({
  type: RECEIVE_ALL_PROJECTS,
  payload
});

export const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

export const fetchAllProjects = () => dispatch => (
  ProjectsApiUtil.fetchAllProjects().then(payload => (
    dispatch(receiveAllProjects(payload)))
  )
);

export const fetchProject = (id) => dispatch => (
  ProjectsApiUtil.fetchProject(id).then(payload => {
    dispatch(receiveProject(payload));
    return payload.project;
  })
);

export const createProject = (project) => dispatch => (
  ProjectsApiUtil.createProject(project).then(project => (
    dispatch(receiveProject(project)))
  )
);

export const updateProject = (project) => dispatch => (
  ProjectsApiUtil.updateProject(project).then(project => (
    dispatch(receiveProject(project)))
  )
);

export const deleteProject = (id) => dispatch => (
  ProjectsApiUtil.deleteProject().then(() => (
    dispatch(removeProject(id)))
  )
);
