import { connect } from 'react-redux';
import {updateStep,fetchStep} from '../../actions/steps_actions';
import StepItem from './step_item';

const msp = (state, ownProps) => {
  return ({
    step: state.entities.steps[ownProps.match.params.stepId],
    projectId: ownProps.match.params.projectId
  });
};

const mdp = (dispatch) => ({
  fetchStep: id => dispatch(fetchStep(id)),
  updateStep: step => dispatch(updateStep(step))
});

export default connect(
  msp,
  mdp
)(StepItem);
