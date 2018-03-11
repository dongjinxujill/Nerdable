import React from 'react';
import { withRouter } from 'react-router-dom';
import StepFormContainer from '../steps/step_form_container';


class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.clearError = this.clearError.bind(this);
    this.state = this.props.project;
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "update") {
      this.props.fetchProject(this.props.match.params.projectId).then(project =>
        {this.setState({body: this.state.body,title: this.state.title, imageFile: this.state.image})});
    }
  }

  componentWillUnmount(){
    if (this.props.errors) {
      this.props.clearProjectErrors();
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
    } else {
      this.setState({ imageUrl: "", imageFile: null });
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
    if (this.state.imageFile) {
      formData.append("project[image]", this.state.imageFile);
    }
    this.props.updateProject(formData, this.props.match.params.projectId).then(() => {
      this.props.history.replace(`/projects/${this.props.match.params.projectId}`);
    });
  }

  handleAddStep(e){
    let formData = new FormData();
    formData.append('project[title]', this.state.title);
    formData.append('project[body]', this.state.body);
    if (this.state.imageFile) {
      formData.append("project[image]", this.state.imageFile);
    }
    e.preventDefault();
    this.props.createProject(formData).then((project) => {
      return this.props.history.replace(`/projects/${project.payload.project.id}/edit`);
    });
  }

  renderButton(){
    if (this.props.formType === "create") {
      return <button className="create-project-submit" onClick={this.handleAddStep}>Add Step</button>;
    } else if (this.props.formType === "update") {
      return (
        <div>
          <button className="create-project-submit" onClick={this.handleSubmit}>Publish</button>
          <StepFormContainer
            projectId={this.props.match.params.projectId}
            steps={this.props.steps}/>
        </div>
      );
    }
  }

  renderImage() {
    if (this.state.imageUrl) {
      return <img className="create-project-image-show" src={this.state.imageUrl}/>;
    } else if (this.state.image) {
      return <img className="create-project-image-show" src={this.state.image} />;
    } else {
      return (<p className="create-project-text-show"><i className="fas fa-plus"></i>&ensp;Click To Add Images</p>);
    }
  }
  clearError(){
    if (this.state.title !== "" && this.state.body !== "" && this.state.imageFile !== null){
      return this.props.clearProjectErrors();
    }
  }
  render() {
    // debugger
    return (
      <div className="create-project-form">
        <input className="create-project-title" type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')}/>
        <label className="create-project-image-container" for="file">{this.renderImage()}
          <input className="inputfile" id="file" name="file" type="file" onChange={this.updateFile}/>
        </label>
        {this.props.errors.map((err)=> {
          return <li>{err}</li>;
          })}
        {this.renderButton()}
      </div>
    );
  }
}

export default withRouter(ProjectForm);
