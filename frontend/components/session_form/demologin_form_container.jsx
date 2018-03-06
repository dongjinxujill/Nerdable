import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const demoUser = {username: 'demo', password: 'demologin'};
  return {processForm: demoUser => dispatch(login(demoUser))};


};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
