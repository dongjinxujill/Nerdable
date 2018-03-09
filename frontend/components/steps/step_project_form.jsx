import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';
import StepForm from './step_form';


class StepProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.step;
    this.deleteSpecificStep = this.deleteSpecificStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  deleteSpecificStep(e){
    e.preventDefault();
    this.props.deleteStep(this.props.stepId);
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function (){
       this.setState({imageFile: file, imageUrl: fileReader.result })
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    return (
      <ul className="each-step-ul">
        <input className="inputfile-step" id="file" name="file" type="file" onChange={this.updateFile} />
        <label for="file">
          <i className="fas fa-arrow-down"></i>Drag Images From Top Bar
        </label>
        <li className="step-click-to-edit">
          <Link to={{pathname: `/projects/steps/${this.state.stepNumber}`}, {state: {title: this.state.title, body: this.state.body, stepNnumber: this.state.stepNumber}}}>
            Step &nbsp;{this.state.stepNumber}: {this.state.title}
          </Link>
        </li>
        <button className="step-delete-button" onClick={this.deleteSpecificStep}>
          <i className="fas fa-times"></i>
        </button>
      </ul>
    );
  }
}

export default StepProjectForm;
