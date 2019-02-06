import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import NewsContainer from './NewsContainer/NewsContainer';

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
        {this.state.logged ? <NewsContainer /> : <Login handleLogin={this.handleLogin}/>}
        
      </div>
    );
  }
}

export default App;
