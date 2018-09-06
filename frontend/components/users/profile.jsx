import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import ProjectIndexItem from '../projects/project_index_item';
import ProjectShow from '../projects/project_show';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.showProjects = this.showProjects.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
    this.props.fetchAllProjects();
  }

  showProjects(){
    if (this.props.projects){
      return this.props.projects.map((project)=>{
        return (
          <div className="profile-project-container">
            <Link to={`/projects/${project.id}`}><img className="profile-project-image" src={project.image} /></Link>
            <li className="profile-project-title">{project.title}</li>
            <button className="profile-project-delete" onClick={this.handleDelete(project)}><i className="fas fa-trash"></i></button>
          </div>
        );
      });

    }

  }

  handleDelete(project){
    return (e)=>{
      e.preventDefault();
      this.props.deleteProject(project.id);
    };
  }

  render(){
    return (
      // <div>
        // <div className="profile-username-image">
        //   <img className="profile-image" src={this.props.user.image_url}/>
        //   <div className="profile-username-created-at">
        //     <li className="profile-username">{this.props.user.username}</li>
        //     <li className="profile-created-at">Joined &emsp; {this.props.user.createdAt}</li>
        //   </div>
        // </div>
      <div className="profile-projects">{this.showProjects()}</div>
      // </div>
    );
  }

}

export default withRouter(Profile);
