import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectsSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
  }

  // componentDidMount() {
  //
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   // if (this.props.projects !== nextProps.projects) {
  //   //   this.props.fetchSearchedProjects(nextProps.projects);
  //   // }
  //   // else {
  //   //   this.props.fetchSearchedProjects(this.props.projects);
  //   // }
  // }


  showResult(){
    if (this.props.projects.length){
      return this.props.projects.map((project,idx)=>{
        return <div className="each-project-show" key={idx-1002}>
          <ProjectIndexItem style={{ width: '50px' }} key={idx+3}
            project={project} currentUser={this.props.currentUser} deleteProject={this.props.deleteProject}/>
          </div>;
      });
    } else {
      return <p className="project-not-found">project not found...</p>;
    }
  }


  render(){
    return (
      <div  className="projects-search-result">{this.showResult()}</div>
    );
  }
}


export default withRouter(ProjectsSearchResult);
