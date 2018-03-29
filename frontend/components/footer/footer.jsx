import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <ul id='footer-link'>
        <a href="https://github.com/dongjinxujill/TheRule"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/dongjinxu"><i className="fab fa-linkedin"></i></a>
        <li className="copyright">© 2018 Dongjin Jill Xu</li>
      </ul>
    );
  }
}


export default Footer;
