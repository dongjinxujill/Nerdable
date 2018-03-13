import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
  }


  showResult(){
    if (this.props.projects.length){
      // debugger
      return this.props.projects.map((project)=>{
        return (
          <span><ProjectIndexItem project={project} currentUser={this.props.currentUser}/></span>
        );
      });
    } else {
      return <p className="project-not-found">project not found...</p>;
    }
  }

  render(){
    return (
      <div>{this.showResult()}</div>
    );
  }
}


export default withRouter(ProjectsSearch);
