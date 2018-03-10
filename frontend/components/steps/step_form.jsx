import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';
// import StepFormList from './step_form_list';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {steps: []};
    this.addStep = this.addStep.bind(this);
    // this.renderSteps = this.renderSteps.bind(this);

  }

  componentWillReceiveProps(newProps) {
    this.setState({ steps: newProps.steps });
  }

  addStep(e) {
    e.preventDefault();
    let stepNumber;
    if(this.state.steps.length !== 0){
      stepNumber = this.state.steps[this.state.steps.length-1].stepNumber + 1;
    } else {
      stepNumber = 0;
    }
    this.props.createStep({title: 'Click To Edit',body: '',step_number: stepNumber, project_id: this.props.projectId});
  }

  render(){
    // debugger
    return (
      <div>
        {this.state.steps.map((step,idx)=> {
          return (
            <div>
              <li>
                <Link to={`/projects/${this.props.projectId}/steps/${step.id}/edit`}>
                  Step #{idx}: {step.title}
                </Link>
              </li>
              <li>
                <Link to={`/projects/${this.props.projectId}/steps/${step.id}/edit`}>
                  <p>Edit</p>
                </Link>
              </li>
              <button onClick={() => this.props.deleteStep(step.id)}>Delete</button>
            </div>
          )
        })}
        <button onClick={this.addStep}>Add Step</button>
      </div>
    );
  }
}

export default StepForm;
