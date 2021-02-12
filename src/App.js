import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        friendList: ["Leo"]
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  componentDidMount = async () => {
    const user = await axios.get("https://randomuser.me/api/");
    console.log(user.data.results[0]);

    this.setState({
      potentialFriends: user.data.results[0],
      apiDataLoaded: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        { this.state.apiDataLoaded &&
          <div>
            <Profile user = {this.state.user} />
            <FriendsPage potentialFriends = {this.state.potentialFriends} />
          </div>
        }  
      </div>
    );
  }
}
export default App;
