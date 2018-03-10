import * as StepsApiUtil from '../util/steps_api_util';

export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const DELETE_STEP = 'DELETE_STEP';

const receiveAllSteps = steps => ({
  type: RECEIVE_ALL_STEPS,
  steps
});

const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

const removeStep = stepId => ({
  type: DELETE_STEP,
  stepId
});

export const fetchAllSteps = () => dispatch => (
  StepsApiUtil.fetchSteps().then(steps => {
    return dispatch(receiveAllSteps(steps));
  })
);

export const fetchStep = stepId => dispatch => (
  StepsApiUtil.fetchStep(stepId).then(step => {
    return dispatch(receiveStep(step));
  })
);

export const createStep = step => dispatch => (
  StepsApiUtil.createStep(step).then(step => {
    return dispatch(receiveStep(step));
  })
);

export const updateStep = step => dispatch => (
  StepsApiUtil.updateStep(step).then(step => {
    return dispatch(receiveStep(step));
  })
);

export const deleteStep = id => dispatch => (
  StepsApiUtil.deleteStep(id).then(() => {
    return dispatch(removeStep(id));
  })
);
