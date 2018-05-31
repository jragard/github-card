import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const URL = "https://api.github.com/users/jragard"

class App extends Component {
  
    state = {
      user: {},
      active: false
    }
  

  buttonClick = () => {
    

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.avatar_url)
        this.setState(
          {user: {
          avatar: data.avatar_url,
          name: data.name, 
          company: data.company,
          location: data.location
        },
      active: !this.state.active});

        // console.log(this.state.active)
        console.log(this.state)
        // console.log(this.state.avatar_url)
        // console.log(this.state.company)
        // console.log(this.state.location)
      })
  }



  render() {
    const { active } = this.state;

    const { avatar } = this.state.user;
    const imgSource = <img src={avatar} alt={""}/>

    const { name } = this.state.user;
    // const name = 'Ryan'

    const { company } = this.state.user;
    const { location } = this.state.user;

    const emptyDiv = <div></div>

    const profile = 
    <React.Fragment>
    

      <div className="picture">
        {imgSource}
      </div>
      <div className="name">
        {name}
      </div>
      <div className="company">
        {company}
      </div>
      <div className="location">
        {location}
      </div>

      </React.Fragment>
    
    
    
        
    


    return (
      <div className="App">
        
        <button className="btn" type="button" onClick={this.buttonClick}>Toggle User</button>
        <div>
        { active ? profile : emptyDiv }
        </div>
          {/* {this.state.active ? <img src={this.state.avatar_url} alt={""}/> : {}} */}
        
      </div>
    );
  }
}

export default App;
