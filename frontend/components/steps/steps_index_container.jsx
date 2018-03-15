import { connect } from 'react-redux';
import StepsIndex from './steps_index';
import { fetchAllSteps, deleteStep, createStep} from '../../actions/steps_actions';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const steps = [];
  debugger
  project.step_ids.map((id)=>{
    if (state.entities.steps[id]) {
      return steps.push(state.entities.steps[id]);
    }
  });

  return {
    project,
    steps: steps || [],
    errors: state.errors.steps,
  };
};

const mapDispatchToProps = dispatch => ({
  createStep: step=>dispatch(createStep(step)),
  fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
  deleteStep: id => dispatch(deleteStep(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsIndex);
