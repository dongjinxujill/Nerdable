import React from 'react';
import { withRouter } from 'react-router-dom';
import StepForm from '../steps/step_form';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render () {
    return (
      <div>
        <form className="create-project-form" onSubmit={this.handleSubmit}>
          <input className="inputfile" name="file" id="file" type="file" onChange={this.updateFile.bind(this)}></input>
          <label for="file"><i className="fas fa-plus"></i>Click To Add Images</label>
          <input className="create-project-submit" type="submit" value='Publish' />
          <label className="create-project-title">Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <img src={this.state.imageUrl}/>
          <StepForm project={this.state}/>
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
