import React from 'react';
import ProjectsIndexItem from './projects_index_item';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    // debugger
    const projects = this.props.projects.map(project => {
      return (
        <ProjectsIndexItem
          key={project.id}
          project={project}
          username={this.props.users[project.author_id].username}
          />
      );
    });

    return (
      <div className="projects-index">
        <div className="container">
          <form className="makeit-searchform">
            <span className="title">Let's Make</span>
            <div className="makeit-searchfield">potential search bar</div>
            <i className="fas fa-search"></i>
          </form>
        </div>
        <ul className="project">
          {projects}
        </ul>
      </div>
    );
  }
}

export default ProjectsIndex;
