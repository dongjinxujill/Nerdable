import * as StepsApiUtil from '../util/steps_api_util';

export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveStep = payload => ({
  type: RECEIVE_STEP,
  payload
});

export const removeStep = stepId => ({
  type: REMOVE_STEP,
  stepId
});

export const fetchStep = (id) => dispatch => (
  StepsApiUtil.fetchStep(id).then(payload => {
    dispatch(receiveStep(payload));
    return payload.step;
  })
);

export const createStep = (step) => dispatch => (
  StepsApiUtil.createStep(step).then(step => (
    dispatch(receiveStep(step)))
  )
);

export const updateStep = (step) => dispatch => (
  StepsApiUtil.updateStep(step).then(step => (
    dispatch(receiveStep(step)))
  )
);

export const deleteStep = (id) => dispatch => (
  StepsApiUtil.deleteStep().then(() => (
    dispatch(removeStep(id)))
  )
);
