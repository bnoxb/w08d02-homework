import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';


class App extends Component {
  constructor () {
    super();

    this.state = {
      logged: false,
      username: "",
    }
  }

  handleLogin = (username) =>{
    this.setState({
      logged: true,
      username: username,
    })
  }
  render() {
    return (
      <div className="App">
        <Login handleLogin={this.handleLogin}/>
        
      </div>
    );
  }
}

export default App;
