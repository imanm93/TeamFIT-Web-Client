import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import './login.css';

class Login extends React.Component {

  responseFacebook = (response) => {
    this.props.setUserData(response);
  }

  render() {
    return(
      <div>
        {this.props.user.isLoggedIn &&
          <div>
            <img className='profile-picture' src={this.props.user.picture} alt={this.props.user.name} />
            <h2>{this.props.user.name}</h2>
          </div>
        }
        {!this.props.user.isLoggedIn &&
          <div>
            <FacebookLogin
              appId='581782575640136'
              autoLoad={true}
              fields='name,email,picture,friends'
              scope='user_friends'
              render={renderProps => (
                <button className='btn-fb' onClick={renderProps.onClick}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>
              )}
              callback={this.responseFacebook}
            />
          </div>
        }
      </div>
    )
  }

}

export default Login;
