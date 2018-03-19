import React from 'react';
import { Link } from 'react-router-dom';


class StepEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.step;
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  update(field){
    return (e)=>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
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

  renderImage() {
    if (this.state.imageUrl) {
      return <img className="edit-step-image-show" src={this.state.imageUrl}/>;
    } else {
      return (<p className="create-step-text-show"><i className="fas fa-plus"></i>&ensp;Click To Add Images</p>);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('step[title]', this.state.title);
    formData.append('step[body]', this.state.body);
    formData.append('step[project_id]', this.state.project_id);
    formData.append("step[step_number]", this.state.step_number);
    if (this.state.imageUrl) {
      formData.append("step[image]", this.state.imageUrl);
    }
    this.props.updateStep(formData, this.state.id).then(()=> this.props.history.replace(`/projects/${this.props.projectId}/edit`) );
  }

  render(){
    return (
      <form className="step-item-container" onSubmit={this.handleSubmit}>
        <input className="step-item-title" type="text" value={this.state.title} onChange={this.update("title")} placeholder={`Step${this.state.step_number} Title`}/>
        <label className="step-label" for="file-step">{this.renderImage()}
          <input className="step-inputfile" id="file-step" name="file-step" type="file" onChange={this.updateFile}/>
        </label>
        <textarea className="step-item-body" type="text" value={this.state.body} onChange={this.update("body")} placeholder={`Let's write something for Step ${this.state.step_number}`}></textarea>
        <button className="step-item-update-button">Update</button>
      </form>
    );
  }
}

export default StepEdit;
