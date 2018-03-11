import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';
// import StepFormList from './step_form_list';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {steps: []};
    this.addStep = this.addStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillUnmount(){
    if (this.props.errors) {
      this.props.clearStepErrors();
    }
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  componentWillReceiveProps(newProps) {
    if (newProps.steps !== this.props.steps) {
      this.setState({imageFile: null, imageUrl: null});
      this.setState({ steps: newProps.steps });
    }
  }

  addStep(e) {
    e.preventDefault();
    let stepNumber;
    if(this.state.steps.length !== 0){
      stepNumber = this.state.steps[this.state.steps.length-1].stepNumber + 1;
    } else {
      stepNumber = 0;
    }

    let formData = new FormData();
    formData.append('step[body]', this.state.body || '');
    formData.append('step[title]', this.state.title || '');
    formData.append('step[project_id]', this.props.projectId);
    formData.append("step[step_number]", stepNumber);
    if (this.state.imageFile) {
      formData.append("step[image]", this.state.imageFile);
    }
    this.props.createStep(formData);
  }

  render(){
    // debugger
    return (
      <div>
        {this.state.steps.map((step,idx)=> {
          return (
            <div>
                {this.props.errors.map((err)=> {
                  return <li>{err}</li>;
                })}
                <input type="file" onChange={this.updateFile}/>
              <img src={this.state.imageUrl}/>
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
