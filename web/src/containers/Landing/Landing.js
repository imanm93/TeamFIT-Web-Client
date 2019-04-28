import React from 'react';
import { connect } from 'react-redux';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import * as actions from '../../actions';
import Login from '../../components/login';

class Landing extends React.Component {

  render() {

    const theme = {
      global: {
        font: {
          family: 'Roboto',
          size: '14px',
          height: '20px',
        },
      },
    };

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <Login user={this.props.user} setUserData={this.props.setUserData} />
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(Landing);
