import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from '../comments/comment_form_container';
import CommentsIndex from '../comments/comments_index_container';

class ProjectShow extends React.Component {

  constructor(props){
    super(props);
    this.showComment = this.showComment.bind(this);
    this.renderUsername = this.renderUsername.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  showComment(){
    if (this.props.project.comment_ids){
      return <CommentsIndex project={this.props.project} key={this.props.project.id+100}/>;
    }
  }

  // showStep(){
  //   if (this.props.project.step_ids){
  //     return <StepsProjectIndex project={this.props.project}/>;
  //   }
  // }

  renderUsername(project){
    return <Link to={`/users/${project.author_id}`} >{this.props.authors[project.author_id].username}</Link>;
  }

  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }
    return (
      <div className="project-show">
        <h1 className="project-show-title">{project.title}</h1>
        <p className="project-show-author">by {this.renderUsername(project)}</p>
        <p className="project-show-date">Posted: {project.createdAt}</p>
        <img className="project-show-image" src={project.image}/>
        <p className="project-show-body">{project.body}</p>
        <div className="all-steps">
          {this.props.steps.map((step,idx)=>{
            return (
              <div className="project-show-step" key={step.id-500} >
                <li  key={step.id} className="project-show-step-number">Step {idx}: &ensp;{step.title}</li>
                <img  key={step.id+2000} className="project-show-step-image" src={step.image}/>
                <li  key={step.id+20001} className="project-show-step-body">{step.body}</li>
              </div>
            );
          })}
        </div>
        <CommentForm project={project} key={project.id}/>
        {this.showComment()}
      </div>
    );
  }
}

export default withRouter(ProjectShow);
