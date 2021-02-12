import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

import axios from 'axios';

import { Route, Link } from 'react-router-dom';

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
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");
        
    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0],
    ];
      

    this.setState({
      potentialFriends: friends,

    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Profile</Link>
          <Link to="/users">Users</Link>
        </nav>
        <h1>CaseyBook</h1>
        <Route exact path="/" render={() => (
          <Profile user={this.state.user} />
        )} />
          <Route path="/users" render={()=> (
            <FriendsPage potentialFriends = {this.state.potentialFriends} />
          )} />
      </div>
    );
  }
}
export default App;
