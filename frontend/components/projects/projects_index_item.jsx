import React from 'react';
import { Link } from 'react-router-dom';


const ProjectsIndexItem = ({ project, deleteProject }) => {
  return (
    <li>
      <Link to={`/projects/${project.id}`}>
        <li>{project.title}</li>
        <li>{project.body}</li>
        <li>{project.author_id}</li>
      </Link>
    </li>);
};

export default ProjectsIndexItem;
