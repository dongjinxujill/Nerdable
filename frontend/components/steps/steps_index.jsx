import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import StepFormContainer from './step_form_container';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {steps: this.props.steps};
    this.addStep = this.addStep.bind(this);
    this.renderButton = this.renderButton.bind(this);
    // this.renderButton = this.renderButton.bind(this);
  }


  addStep(e){
    // debugger
    e.preventDefault();
    this.props.createStep({title:"click to edit", body: "", step_number: this.state.steps.length, project_id: this.props.project.id, image: null});
    this.setState({steps: this.state.steps});
  }

  renderButton(idx){
    debugger
    if (this.state.steps.length - 1 === idx){
      return <button className="add-step-button" onClick={this.addStep}>Add Step</button>

    }
  }

  render(){
    // debugger
    if (this.props.steps.length){
      return this.props.steps.map((step,idx)=>{
        return (
          <div>
            <div className="each-step-ul">
              <img className="create-step-image-show" src={step.image}/>
              <Link className="step-click-to-edit" to={`/projects/${this.props.project.id}/steps/${step.id}`}><li className="step-click-to-edit">Step &nbsp; {step.step_number}:&nbsp; {step.title}</li></Link>
              <button className="step-delete-button" onClick={()=>this.props.deleteStep(step.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
            {this.renderButton(idx)}
          </div>
        );
      });
    } else {
      return <button className="add-step-button" onClick={this.addStep}>Add Step</button>;
    }
  }

}

export default withRouter(StepsIndex);
