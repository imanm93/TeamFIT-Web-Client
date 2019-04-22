import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './login.css';

class Login extends React.Component {

  componentClicked = () => { }

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
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Login);
