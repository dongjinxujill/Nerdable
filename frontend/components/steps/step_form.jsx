import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {steps: []};
    this.addStep = this.addStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderStepImage = this.renderStepImage.bind(this);
  }

  componentDidMount(){
    this.setState({title: 'Click To Edit'});
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
    // debugger
    if (this.state.imageFile) {
      // debugger
      formData.append("step[image]", this.state.imageFile);
    }
    this.props.createStep(formData);
  }

  renderStepImage() {
    if (this.state.imageUrl) {
      return <img className="create-step-image-show" src={this.state.imageUrl}/>;
    } else if (this.state.steps[this.state.steps.length-1].image) {
      return <img className="create-step-image-show" src={this.state.steps[this.state.steps.length-1].image} />;
    } else {
      return (<p className="create-step-text-show"><i className="fas fa-arrow-down"></i>&ensp;Click To Add Images</p>);
    }
  }

  render(){
    return (
      <div>
        {this.state.steps.map((step,idx)=> {
          return (
            <div className="each-step-ul">
              {this.props.errors.map((err)=> {
                return <li className="create-step-error">{err}</li>;
              })}

              <label className="step-label">{this.renderStepImage()}
                <input className="step-inputfile" type="file" onChange={this.updateFile}/>
              </label>
              <Link to={`/projects/${this.props.projectId}/steps/${step.id}/edit`}>
                <p className="create-step-number">Step {idx}: {step.title}</p>
              </Link>
              <button className="step-delete-button" onClick={() => this.props.deleteStep(step.id)}>X</button>
            </div>
          )
        })}
        <button className="add-step-button" onClick={this.addStep}>Add Step</button>
      </div>
    )
  }
}

export default StepForm;
