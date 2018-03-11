import React from 'react';
import { withRouter } from 'react-router-dom';
import StepFormContainer from '../steps/step_form_container';


class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayImage = this.displayImage.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.state = this.props.project;
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "update") {
      this.props.fetchProject(this.props.match.params.projectId).then(project =>
        {this.setState({body: this.props.project.body,title: this.props.project.title})});
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

  update(field) {
    let that = this;
    return (e) => {
      that.setState({[field]: e.target.value});
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('project[body]', this.state.body);
    formData.append('project[title]', this.state.title);
    formData.append("project[image]", this.state.imageFile);
    this.props.updateProject(formData, this.props.match.params.projectId).then(() => {
      this.props.history.push(`/projects/${this.props.match.params.projectId}`);
    });
  }

  handleAddStep(e){
    let formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[body]', this.state.body);
    formData.append("project[image]", this.state.imageFile);
    e.preventDefault();
    this.props.createProject(formData).then((project) => {
      return this.props.history.replace(`/projects/${project.payload.project.id}/edit`);
    });
  }

  renderButton(){
    if (this.props.formType === "create") {
      return <button onClick={this.handleAddStep}>Add Step</button>;
    } else if (this.props.formType === "update") {
      return (
        <div>
          <StepFormContainer
            projectId={this.props.match.params.projectId}
            steps={this.props.steps}/>
          <button onClick={this.handleSubmit}>Publish</button>;
        </div>
      );
    }
  }

  displayImage() {
    if (this.props.formType === "update" && this.state.imageFile === null && this.props.project) {
      return <img src={this.props.project.image} />
    } else if (this.state.imageUrl) {
      return <img src={this.state.imageUrl}
        className="project-form__img-main" />;
    } else {
      return (
        <h3 className="project-form__img-upload-text">
          <i className="fas fa-plus"></i> Click To Add Title Image
        </h3>
      );
    }
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.updateFile}/>
        <input type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')}/>
        <input type="text" value={this.state.body} placeholder="Body" onChange={this.update('body')}/>
        {this.renderButton()}
        {this.displayImage()}
      </div>
    );
  }
}

export default withRouter(ProjectForm);
