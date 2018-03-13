import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.values(this.props.projects);
    this.showResult = this.showResult.bind(this);
  }


  showResult(){
    if (this.state.length){
      this.state.map((project)=>{
        return (
          <li><ProjectIndexItem project={Object.values(project)}/></li>
        );
      });
    } else {
      return <p>not found...</p>;
    }
  }

  render(){
    return (
      <div>{this.showResult()}</div>
    );
  }
}


export default withRouter(ProjectsSearch);
