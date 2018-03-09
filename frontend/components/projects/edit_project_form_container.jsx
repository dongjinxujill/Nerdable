import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject, deleteProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const defaultProject = { title: '', body: '' };
  const project = state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  const formType = 'Update Project';

  return { project, formType, currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    action: project => dispatch(updateProject(project)),
    deleteProject: id => dispatch(deleteProject(id))
  };
};

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.projectId !== nextProps.match.params.projectId) {
  //     this.props.fetchProject(nextProps.match.params.projectId);
  //   }
  // }

  render() {
    const { action, formType, project, currentUser } = this.props;
    return (
      <ProjectForm
        action={action}
        formType={formType}
        project={project}
        currentUser={currentUser}
        deleteProject={this.props.deleteProject}
        />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
