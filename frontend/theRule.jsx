import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {fetchAllProjects, fetchProject, createProject, updateProject, deleteProject} from './actions/projects_actions';
// import {receiveAllProjects, receiveProject, removeProject, RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from './actions/projects_actions';
//
// window.fetchAllProjects = fetchAllProjects;
// window.fetchProject = fetchProject;
// window.createProject = createProject;
// window.updateProject = updateProject;
// window.deleteProject = deleteProject;
// window.receiveAllProjects = receiveAllProjects;
// window.receiveProject = receiveProject;
// window.removeProject = removeProject;
// window.store = configureStore();
// const store = window.store;
// window.getState = store.getState();
// window.dispatch = store.dispatch;

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
