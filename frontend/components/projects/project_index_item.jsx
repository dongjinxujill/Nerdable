import React from 'react';
import {Link} from 'react-router-dom';


const ProjectIndexItem = (props) => {
  // debugger
    return (
      <li className="each-project-main">
        <Link to={`/projects/${props.project.id}`}>
          <li className="project-image"><img src={props.project.image}/></li>
          <li className="project-title">{props.project.title}</li>
        </Link>
      </li>
    );
};


export default ProjectIndexItem;
