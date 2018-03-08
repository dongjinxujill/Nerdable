import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectForm from './project_form';
import { createProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  const project = { title: '', body: '', imageFile: null, imageUrl: null};
  const formType = 'Create Project';
  const currentUser = state.session.currentUser;
  return { project, formType, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: project => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
