import React from 'react';
import { withRouter } from 'react-router-dom';
import StepForm from '../steps/step_form';
import { Link} from 'react-router-dom';
import merge from 'lodash/merge';


class ProjectForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
    this.state = this.props.project;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[body]", this.state.body);
    formData.append("project[image]", this.state.imageFile);
    e.preventDefault();
    this.props.action(formData).then(() => this.props.history.push('/'));
  }

  updateFile(e){
    debugger
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  deleteStep(stepId){
    let oldState = Object.assign({}, this.state);
    delete oldState.steps[stepId];
    let steps = {};
    Object.keys(oldState.steps).map( (step, idx) => {
      steps[idx+1] = oldState.steps[step];
    });
    steps = Object.values(steps);
    let newState = Object.assign({}, oldState, {steps: steps});
    this.setState(newState);
  }

  updateStep(e){
    e.preventDefault();
    const stepNumber = this.state.steps[this.state.steps.length-1].stepNumber + 1;
    let newState = merge({}, this.state, {steps: {[stepNumber]: {title:"(click to edit)", body: "", stepNumber: stepNumber}}});
    this.setState(newState);
  }

  renderSteps(){
    return (
      <button onClick={this.updateStep}>Add Steps</button>
    );
  }

  render () {
    // debugger
    return (
      <div>
        <form className="create-project-form" onSubmit={this.handleSubmit}>
          <input className="inputfile" name="file" id="file" type="file" onClick={this.updateFile.bind(this)}></input>
          <label>
            <i className="fas fa-plus"></i>Click To Add Images
          </label>
          <input className="create-project-submit" type="submit" value='Publish' />
          <label className="create-project-title">Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <img src={this.state.imageUrl}/>
          {this.renderSteps()}
          {Object.values(this.state.steps).map((step, idx) => {
            return (
                <li key={idx}><StepForm step={step} stepId={idx} deleteStep={this.deleteStep}/></li>
              );
          })}
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
