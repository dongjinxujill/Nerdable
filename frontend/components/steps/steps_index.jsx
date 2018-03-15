import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import StepFormContainer from './step_form_container';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {steps: this.props.steps};
    this.addStep = this.addStep.bind(this);
    // this.renderButton = this.renderButton.bind(this);
  }
  // componentDidMount(){
  //   this.setState({steps: this.state.steps});
  // }

  // renderButton(e){
  //   e.preventDefault();
  //
  // }

  addStep(e){
    // debugger
    e.preventDefault();
    this.props.createStep({title:"click to edit", body: "", step_number: this.state.steps.length, project_id: this.props.project.id, image: null});
    this.setState({steps: this.state.steps});
  }

  render(){
    // debugger
    if (this.props.steps.length){
      return this.props.steps.map((step)=>{
        return (
          <div>
            <Link to={`/projects/${this.props.project.id}/steps/${step.id}`}><li>title: {step.title}</li></Link>
            <li>body: {step.body}</li>
            <li>stepNumber: {step.step_number}</li>
            <img src={step.image}/>
            <button onClick={this.addStep}>click to add step von step index</button>
          </div>
        );
      });
    } else {
      // debugger
      return <button onClick={this.addStep}>click to add step von step index</button>;
    }
  }

}

export default withRouter(StepsIndex);
