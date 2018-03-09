import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StepForm from './step_form';

const mapStateToProps = (state, ownProps) => {
  // debugger

  const steps = [{title: "(click to edit)", body: '', stepNumber: state., imageFile: null, imageUrl: null}]};
  const currentUser = state.session.currentUser;
  return { steps, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
