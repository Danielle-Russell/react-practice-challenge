import React from 'react';
import './App.css';
import Profile from './Profile'
import AppContext from './AppContext'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let role = event.target.role.value;
    let idd = event.target.idd.value
    let allProfiles = {firstName: firstName, lastName: lastName, role: role, id: idd}
  
    this.setState({
      profiles: [...this.state.profiles, allProfiles]
    })
  }
  
  render() {
    let contextValues = {
      profiles: this.state.profiles
    }
    return (
      <AppContext.Provider value={contextValues}>
      <div>
      <h1>Profiles</h1>
          {/* Display the full list of Profiles */}
          {/* Add a form to add a new profile to the list  */}
          <form onSubmit={(event) => {this.handleSubmit(event)}}>
            <label htmlFor="firstName">First Name:</label>
            <input type="textarea" id="firstName" name="firstName"/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="textarea" id="lastName" name="lastName"/>
            <label htmlFor="role">Role:</label>
            <input type="textarea" id="role" name="role"/>
            <label htmlFor="id">ID: </label>
            <input type="textarea" id="idd" name="id"/>
            <button type="submit">Submit</button>
          </form>
          <Profile profile={this.state.profiles} />
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;
