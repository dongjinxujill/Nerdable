import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import ProjectsSearchResult from './projects/projects_search_result_container';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import ProjectsIndexContainer from './projects/projects_index_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectForm from './projects/project_form_container';

import StepItemContainer from './steps/step_item_container';

// import CommentFormContainer from './comemnts/comment_form_container';

import Footer from './footer/footer';


import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <React.Fragment>
    <div className="main-main-div">
      <header className="header-nav">
        <Link to="/" className="header-link">
          <p className="logo">TheRule</p>
        </Link>
        <li className="li-project-button"><Link to="/projects/new" className="write-project-button" component={ProjectForm}>Write a Project</Link></li>
        <GreetingContainer />
      </header>
      <Switch>
        <Route exact path="/projects/search" component={ProjectsSearchResult}/>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/projects/new" component={ProjectForm}/>
        <ProtectedRoute exact path="/projects/:projectId/edit" component={ProjectForm}/>
        <ProtectedRoute exact path="/projects/:projectId/steps/:stepId/edit" component={StepItemContainer} />
        <Route exact path="/projects/:projectId" component={ProjectShowContainer}/>
        <Route exact path="/" component={ProjectsIndexContainer}/>
      </Switch>
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
