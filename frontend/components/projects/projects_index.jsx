import React from 'react';
// import ProjectsIndexItem from './projects_index_item';
import { Link } from 'react-router-dom';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }


  render() {
    // debugger
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
          {this.props.projects.map(project => {
            return (
              <li className="each-project-main">
                <Link to={`/projects/${project.id}`}>
                  <li className="project-image"><img src={project.image}/></li>
                  <li className="project-title">{project.title}</li>
                </Link>
                <li className="project-author">by {this.props.users[project.author_id].username}</li>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectsIndex;
