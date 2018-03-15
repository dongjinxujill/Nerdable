import React from 'react';
import { withRouter } from 'react-router-dom';

class StepForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: "", body: "", projectId: this.props.project.id, imageUrl: null, imageFile:null};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }
  
  // componentWillUnmount(){
  //   this.setState({title: "", body: "", projectId: this.props.project.id, imageUrl: null, imageFile:null});
  // }

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

  update(field){
    return (e)=>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let stepNumber;
    if(this.props.steps.length !== 0){
      stepNumber = this.props.steps[this.props.steps.length-1].stepNumber + 1;
    } else {
      stepNumber = 0;
    }
    let formData = new FormData();
    formData.append('step[title]', this.state.title);
    formData.append('step[body]', this.state.body);
    formData.append('step[project_id]', this.props.projectId);
    formData.append("step[step_number]", stepNumber);
    if (this.state.imageFile) {
      formData.append("step[image]", this.state.imageFile);
    }
    this.props.createStep(formData);
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.updateFile}/>
        <input type="text" value={this.state.title} placeholder="click to edit" onChange={this.update("title")}/>
        <input type="text" value={this.state.body} onChange={this.update("body")}/>
        <button>Add Step real</button>
      </form>
    );
  }
}

export default StepForm;
