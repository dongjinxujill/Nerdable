import React from 'react';
import { Link } from 'react-router-dom';


class StepEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.step;
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // debugger
    this.props.updateStep(formData, this.state.id).then(()=> this.props.history.replace(`/projects/${this.props.projectId}/edit`) );
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.update("title")} placeholder="title"/>
        <input type="text" value={this.state.body} onChange={this.update("body")} placeholder="body"/>
        <input type="file" onChange={this.updateFile}/>
        <button>Update</button>
      </form>
    )
  }
}

export default StepEdit;
