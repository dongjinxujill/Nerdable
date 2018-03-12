import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  update(field){
    return (e)=>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let filteredProjects = this.props.projects.filter((project) => {
      return project.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
  }


  render() {
    // debugger
    return (
      <div className="projects-index">
        <div className="container" onSubmit={this.handleSubmit}>
          <form className="makeit-searchform" >
            <span className="title">Let's Make</span>
            <div className="makeit-searchfield"><input onChange={this.update("search")} placeholder="search"/></div>
            <button><li className="fas fa-search"></li></button>
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
