import React from 'react';
import FacebookLogin from 'react-facebook-login';

import './login.css';

class Login extends React.Component {

  state = {
    isLoggedIn: false,
    name: '',
    userID: '',
    email: '',
    picture: ''
  }

  componentClicked = () => { }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      name: response.name,
      userID: response.userID,
      email: response.email,
      picture: response.picture.data.url
    });
  }

  render() {
    return(
      <div>
        {this.state.isLoggedIn &&
          <div>
            <img className='profile-picture' src={this.state.picture} alt={this.state.name} />
            <h2>{this.state.name}</h2>
          </div>
        }
        {!this.state.isLoggedIn &&
          <div>
            <FacebookLogin
              appId='581782575640136'
              autoLoad={true}
              fields='name,email,picture,friends'
              scope='user_friends'
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        }
      </div>
    )
  }

}

export default Login;
