import React from 'react'
import AppContext from './AppContext'

class Profile extends React.Component {

    static contextType = AppContext;

    render() {
       
        return(
           <ul>
                {this.context.profiles.map((profile, index) => {
                   return <li key={index}>
                       Name: {profile.firstName} {profile.lastName} <br/>
                       Role: {profile.role} <br/>
                       ID: {profile.id} </li>
                })}
            </ul>
          
        )
    }
}


export default Profile