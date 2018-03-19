import { connect } from 'react-redux';
import StepEdit from './step_edit';
import {fetchStep, updateStep} from '../../actions/steps_actions';

const msp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const step = state.entities.steps[ownProps.match.params.stepId];
  return {step, projectId};
};

const mdp = dispatch => ({
  fetchStep: stepId => dispatch(fetchStep(stepId)),
  updateStep: (formData, stepId) => dispatch(updateStep(formData, stepId))
});

export default connect(
  msp,
  mdp
)(StepEdit);
