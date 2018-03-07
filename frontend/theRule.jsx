import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchAllProjects, fetchProject, createProject, updateProject, deleteProject} from './util/projects_api_util';
import {receiveAllProjects, receiveProject, removeProject, RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from './actions/projects_actions';

// window.fetchAllProjects = fetchAllProjects;
// window.fetchProject = fetchProject;
// window.createProject = createProject;
// window.updateProject = updateProject;
// window.deleteProject = deleteProject;
// window.receiveAllProjects = receiveAllProjects;
// window.receiveProject = receiveProject;
// window.removeProject = removeProject;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
