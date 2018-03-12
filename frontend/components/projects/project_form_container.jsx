import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { createProject,fetchProject, updateProject, clearProjectErrors} from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  let formType, project, imageUrl;
  if (ownProps.match.path === "/projects/new"){
    formType = "create";
    project = {title: "", body: "", imageFile: null, imageUrl:null};
  } else{
    formType = "update";
    project = state.entities.projects[ownProps.match.params.projectId] ||{title: "", body: "", imageFile: null, imageUrl:null};
    imageUrl = project.imageUrl;
  }
  return {project, formType, steps: state.entities.steps, currentUser: state.session.currentUser, errors: state.errors.project, imageUrl };
};

const mapDispatchToProps = (dispatch) => {
  return {

    fetchProject: id => dispatch(fetchProject(id)),
    createProject: project => dispatch(createProject(project)),
    updateProject: (project, projectId) => dispatch(updateProject(project, projectId)),
    clearProjectErrors: () => dispatch(clearProjectErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
