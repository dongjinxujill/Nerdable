import * as ProjectsApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

export const fetchAllProjects = () => dispatch => (
  ProjectsApiUtil.fetchAllProjects().then(projects => (
    dispatch(receiveAllProjects(projects)))
  )
);

export const fetchProject = (id) => dispatch => (
  ProjectsApiUtil.fetchProject(id).then(project => (
    dispatch(receiveProject(project)))
  )
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
