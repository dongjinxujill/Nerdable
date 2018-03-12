const ProjectIndexItem = (props) => {
  debugger
  return props.projects.map(project => {
    return (
      <li className="each-project-main">
        <Link to={`/projects/${project.id}`}>
          <li className="project-image"><img src={project.image}/></li>
          <li className="project-title">{project.title}</li>
        </Link>
        <li className="project-author">by {this.props.users[project.author_id].username}</li>
      </li>
    );
  });
};


export default ProjectIndexItem;
