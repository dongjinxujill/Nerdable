import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id);
  }

  render(){
    return (
      <div>
        <li>{this.props.user.username}</li>
        <img src={this.props.user.image}/>
        <li>{this.props.user.image}</li>
      </div>
    );
  }

}

export default withRouter(Profile);
