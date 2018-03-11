import { connect } from 'react-redux';
import StepForm from './step_form';
import {createStep,deleteStep, clearStepErrors
} from '../../actions/steps_actions';

const msp = (state, ownProps) => ({
  // debugger
  projectId: ownProps.projectId,
  steps: Object.values(ownProps.steps),
  errors: state.errors.step
});

const mdp = dispatch => ({
  createStep: step => dispatch(createStep(step)),
  deleteStep: id => dispatch(deleteStep(id)),
  clearStepErrors: () => dispatch(clearStepErrors())
});

export default connect(
  msp,
  mdp
)(StepForm);
