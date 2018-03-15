import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectIndexItem from '../projects/project_index_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.showProjects = this.showProjects.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id);
    this.props.fetchAllProjects();
  }

  showProjects(){
    return this.props.projects.map((project)=>{
      debugger
      return (
        <div className="profile-project-container">
          <img className="profile-project-image" src={project.image} />
          <li className="profile-project-title">{project.title}</li>
          <button className="profile-project-delete" onClick={()=>this.props.deleteProject(project.id)}>Delete</button>
        </div>
      );
    });
  }

  render(){
    return (
      <div>
        <li>{this.props.user.username}</li>
        <img src={this.props.user.image}/>
        <li>{this.props.user.image}</li>
        <p className="profile-project-exp">{this.props.user.username}&emsp; projects</p>
        {this.showProjects()}
      </div>
    );
  }

}

export default Profile;
