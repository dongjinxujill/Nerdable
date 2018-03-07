import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import ProjectsIndexContainer from './projects/projects_index_container';
import Footer from './footer/footer';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import DemoLoginFormContainer from './session_form/demologin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <React.Fragment>
    <div>
      <header className="header-nav">
        <Link to="/" className="header-link">
          <img src={window.logo} className="logo"/>
        </Link>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/demologin" component={DemoLoginFormContainer} />
        <Route exact path="/" component={ProjectsIndexContainer}/>
      </Switch>
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
