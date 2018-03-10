import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { createProject,fetchProject, updateProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  let formType, project;

  if (ownProps.match.path === "/projects/new"){
    formType = "create";
    project = state.entities.projects;
  } else{
    formType = "update";
    project = state.entities.projects[ownProps.match.params.projectId];
  }
  return {project, formType, steps: state.entities.steps, currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {

    fetchProject: id => dispatch(fetchProject(id)),
    createProject: project => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
