import { connect } from 'react-redux';
import StepForm from './step_form';
import {createStep,deleteStep, clearStepErrors
} from '../../actions/steps_actions';

const msp = (state, ownProps) => {
  const projectId = ownProps.projectId;
  let project;
  if (state.entities.projects[projectId]) {
    project = state.entities.projects[projectId];
  }
  const steps = [];
  project.step_ids.map((id)=> {
    if (state.entities.steps[id]){
      return steps.push(state.entities.steps[id]);
    }
  });
  return {project, steps};
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
