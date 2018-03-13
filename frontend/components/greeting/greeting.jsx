import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class Greeting extends React.Component{
  constructor(props){
    // debugger
    super(props);
    this.state = {search: ''};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderOnRightSide = this.renderOnRightSide.bind(this);

  }

  // componentWillMount(){
  //   this.props.fetchSearchedProjects(this.state.search);
  // }

  update(field){
    return (e)=>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchedProjects(this.state.search).then(()=>{
      this.setState({search: ""});
      this.props.history.push("/projects/search");
    });
  }

  renderOnRightSide(){
    if (this.props.currentUser) {
      return (
        <hgroup className="header-group">
          <div class="dropdown">
            <button class="dropbtn">{this.props.currentUser.username}&nbsp;<i className="fas fa-sort-down"></i></button>
            <div class="dropdown-content">
              <a><button className="header-button" onClick={this.props.logout}>Log Out</button></a>
              <a><Link className="header-link" to="/projects/new">New Project</Link></a>
            </div>
          </div>
      	</hgroup>
      );
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          <span className="pipe">  &nbsp;| &nbsp; </span>
          <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
        </nav>
      );
    }
  }

 render(){
   // debugger
   return (
     <div className="search-login">
       <form className="search-form" onSubmit={this.handleSubmit}>
         <input className="search-input" type='text' value={this.state.search} placeholder="Let's Make..." onChange={this.update('search')}/>
         <button className="search-button"><i class="fas fa-search" id="fa-search-header"></i></button>
       </form>
       {this.renderOnRightSide()}
     </div>
   );
 }
}


export default withRouter(Greeting);
