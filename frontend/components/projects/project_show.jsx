import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/comment_form_container';
import CommentsIndex from '../comments/comments_index_container';

class ProjectShow extends React.Component {

  constructor(props){
    super(props);
    this.showComment = this.showComment.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchProject(this.props.match.params.projectId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.projectId !== nextProps.match.params.projectId) {
  //     this.props.fetchProject(nextProps.match.params.projectId);
  //   } else {
  //     this.props.fetchProject(this.props.match.params.projectId);
  //   }
  // }

  showComment(){
    if (this.props.project.comments){
      return <CommentsIndex project={this.props.project}/>;
    }
  }

  render() {
    // debugger
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }
    return (
      <div className="project-show">
        <h1 className="project-show-title">{project.title}</h1>
        <p className="project-show-author">by {this.props.authors[project.author_id].username}</p>
        <p className="project-show-date">Posted: {project.createdAt}</p>
        <p className="project-show-body">{project.body}</p>
        <div className="all-steps">
          {this.props.steps.map((step,idx)=>{
            return (
              <div className="project-show-step">
                <li className="project-show-step-number">Step {step.step_number}: &ensp;{step.title}</li>
                <img className="project-show-step-image" src={step.image}/>
                <li className="project-show-step-body">{step.body}</li>
              </div>
            );
          })}
        </div>
        <CommentForm project={project}/>
        {this.showComment()}
      </div>
    );
  }
}

export default ProjectShow;
