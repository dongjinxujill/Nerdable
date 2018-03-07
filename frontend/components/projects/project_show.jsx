import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

  componentDidMount() {
    // debugger
    this.props.fetchProject(this.props.match.params.projectId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.projectId !== nextProps.match.params.projectId) {
  //     this.props.fetchProject(nextProps.match.params.projectId);
  //   }
  // }

  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{project.title}</h3>
        <p>by {this.props.authors[project.author_id].username}</p>
        <p>Posted: {project.createdAt}</p>
        <p>{project.body}</p>

        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ProjectShow;
