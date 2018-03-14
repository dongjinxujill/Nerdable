import { connect } from 'react-redux';
import StepForm from './step_form';
import {createStep,deleteStep, clearStepErrors
} from '../../actions/steps_actions';

const msp = (state, ownProps) => {
  const steps = Object.values(ownProps.steps);
  // debugger
  return {projectId: ownProps.projectId, errors: state.errors.step, steps};
};

const mdp = dispatch => ({
  createStep: step => dispatch(createStep(step)),
  deleteStep: id => dispatch(deleteStep(id)),
  clearStepErrors: () => dispatch(clearStepErrors())
});

export default connect(
  msp,
  mdp
)(StepForm);
