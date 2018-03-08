import React from 'react';
import { withRouter } from 'react-router-dom';

class StepForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.step;
  }

  // componentDidMount(){
  //   this.props.
  // }

  render(){
    return (
      <ul>
        <li>{this.props.project.title}</li>
      </ul>
    );
  }
}

export default StepForm;
