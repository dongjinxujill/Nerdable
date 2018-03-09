import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { createProject,fetchProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const project = { title: '', body: '', imageFile: null, imageUrl: null,
    steps: [{title: "(click to edit)", body: '', stepNumber: 0, imageFile: null, imageUrl: null}]};
  const formType = 'Create Project';
  const currentUser = state.session.currentUser;
  return { project, formType, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    action: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
