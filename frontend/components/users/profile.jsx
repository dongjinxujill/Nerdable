import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectIndexItem from '../projects/project_index_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.showProjects = this.showProjects.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id);
    // this.props.fetchAllProjects();
  }

  showProjects(){
    if (this.props.projects){
      // debugger
      return this.props.projects.map((project)=>{
        return (
          <div className="profile-project-container">
            <img className="profile-project-image" src={project.image} />
            <li className="profile-project-title">{project.title}</li>
            <button className="profile-project-delete" onClick={this.handleDelete(project)}>Delete</button>
          </div>
        );
      });
    } else {
      return <p className="profile-project-not-found">No projects created yet...</p>;
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
      <div>
        <div className="profile-username-image">
          <img className="profile-image" src={this.props.user.image_url}/>
          <div className="profile-username-created-at">
            <li className="profile-username">{this.props.user.username}</li>
            <li className="profile-created-at">Joined &emsp; {this.props.user.createdAt}</li>
          </div>
        </div>
        {this.showProjects()}
      </div>
    );
  }

}

export default Profile;
