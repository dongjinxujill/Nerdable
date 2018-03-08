import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StepForm from './step_form';
import { createStep, updateStep, deleteStep } from '../../actions/steps_actions';

const mapStateToProps = (state, ownProps) => {
  const step = {title: '', body: '', step_number: 0};
  return {step};

};

const mapDispatchToProps = (dispatch) => {
  return {
    
    createStep: step => dispatch(createStep(step)),
    updateStep: step => dispatch(updateStep(step)),
    deleteStep: id => dispatch(deleteStep(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
