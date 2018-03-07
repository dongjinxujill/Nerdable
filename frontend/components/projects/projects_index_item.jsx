import React from 'react';
import { Link } from 'react-router-dom';


const ProjectsIndexItem = ({ project, username }) => {
  return (
    <li className="project-main-page">
      <Link to={`/projects/${project.id}`}>
        <li className="project-title">{project.title}</li>
      </Link>
      <li className="project-author">by {username}</li>
    </li>);
};

export default ProjectsIndexItem;
