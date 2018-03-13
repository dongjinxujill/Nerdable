import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class StepItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStep(this.props.step.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.step.title !== this.props.step.title || nextProps.step.body !== this.props.step.body) {
      this.setState({title: nextProps.step.title, body: nextProps.step.body});
    }
  }

  handleSubmit() {
    // debugger
    this.props.updateStep(Object.assign({}, this.state, { id: this.props.step.id })).then(() => {
      return this.props.history.replace(`/projects/${this.props.projectId}/edit`);
    });
  }

  update(field) {
    // debugger
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    // debugger
    return (
      <div className="step-item-container">
        <div className="title-body-box">
          <input className="step-item-title" type="text" placeholder="Title" onChange={this.update('title')} value={this.state.title} />
          <textarea className="step-item-body" type="text" onChange={this.update('body')} value={this.state.body}></textarea>
        </div>
        <div className="step-button">
          <Link to={`/projects/${this.props.projectId}/edit`}>
            <p className="step-item-back-button">Back To Project</p>
          </Link>
          <button onClick={this.handleSubmit}>
            <p className="step-item-update-button">Update Step</p>
          </button>
        </div>
      </div>
    );
  }
}

export default StepItem;
