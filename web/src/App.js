import React from 'react';
import Routes from './routes';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <ConnectedRouter className="App" history={this.props.history}>
        <Routes />
      </ConnectedRouter>
    );
  }
}
