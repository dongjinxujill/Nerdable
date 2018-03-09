import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const project = this.props.history[this.props.history.length-1];
    this.props.history.push(project);
  }

  render(){
    return (
      <form>
        <ul>
          <input placeholder={this.state.title} onChange={this.update('title')}/>
          <input placeholder={this.state.body} onChange={this.update('body')}/>
          <input placeholder={this.state.stepNumber} onChange={this.update('stepNumber')}/>
        </ul>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default StepForm;
