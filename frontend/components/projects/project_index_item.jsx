import React from 'react';
import {Link} from 'react-router-dom';


class ProjectIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(projectId){
    this.props.deleteProject(projectId);
  }

  renderDeleteButton(project){
    if (this.props.currentUser){
      if (this.props.currentUser.id === this.props.project.author_id){
        return <button className="project-index-item-delete" onClick={()=>this.handleDelete(this.props.project.id)}><i class="far fa-trash-alt"></i></button>
      }
    }
  }

  render(){
    return (
      <div className="each-project-main">
        <Link to={`/projects/${this.props.project.id}`}>
          <li className="project-image"><img src={this.props.project.image}/></li>
          <li className="project-title">{this.props.project.title}</li>
        </Link>
        {this.renderDeleteButton()}
      </div>
    );

  }
};


export default ProjectIndexItem;
