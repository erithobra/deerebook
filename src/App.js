import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://static.wikia.nocookie.net/ssb/images/1/19/Link_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1000?cb=20190612145102",
        friendList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        <Profile />
      </div>
    );
  }
}
export default App;
