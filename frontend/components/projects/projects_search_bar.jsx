import React from 'react';
import ProjectsSearch from './projects_search';


class ProjectsSearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {search: ''};
    this.update = this.update.bind(this);
  }

  update(e){
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    // return <Link to="/projects/search" component={ProjectsSearch}></Link>
    return <Link to="/projects/search"></Link>
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={this.update}/>
        <input type="submit" placeholder="submit"/>
      </form>

    )
  }
}

export default ProjectsSearchBar;
