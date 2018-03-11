import { connect } from 'react-redux';
import StepForm from './step_form';
import {createStep,deleteStep,
} from '../../actions/steps_actions';

const msp = (state, ownProps) => {
  // debugger
  return ({projectId: ownProps.projectId,steps: Object.values(ownProps.steps), imageFile: null, imageUrl: null});
};

const mdp = dispatch => ({
  createStep: step => dispatch(createStep(step)),
  deleteStep: id => dispatch(deleteStep(id))
});

export default connect(
  msp,
  mdp
)(StepForm);
