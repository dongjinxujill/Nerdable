import React from 'react';
import { Link } from 'react-router-dom';


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
    this.props.updateStep(Object.assign({}, this.state, { id: this.props.step.id })).then(() => {
      return this.props.history.replace(`/projects/${this.props.projectId}/edit`);
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Title" onChange={this.update('title')} value={this.state.title} />
        <input type="text" placeholder="Body" onChange={this.update('body')} value={this.state.body}/>
        <Link to={`/projects/${this.props.projectId}/edit`}>
          Back To Project
        </Link>
        <button onClick={this.handleSubmit}>
          Update Step
        </button>
      </div>
    );
  }
}

export default StepItem;
