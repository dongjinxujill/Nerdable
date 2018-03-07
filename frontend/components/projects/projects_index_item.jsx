import React from 'react';
import { Link } from 'react-router-dom';


const ProjectsIndexItem = ({ project, deleteProject }) => {
  return (
    <div className="project-main-page">
      <Link to={`/projects/${project.id}`}>
        <li className="project-title">{project.title}</li>
        <li className="project-body">{project.body}</li>
        <li className="project-authorId">{project.author_id}</li>
      </Link>
    </div>);
};

export default ProjectsIndexItem;
