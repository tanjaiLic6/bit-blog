import React, { Component } from 'react';
import userIcon  from '../../../../../../src/Shared/userIcon.png';
// import { getAuthors } from '../../../../Services/AuthorService';

export class NameInfo extends Component {
   constructor(props){
        super(props);
    }

render(){
      return(   
         <div className = "d-flex">
            <div><img src = {userIcon} ></img></div>
            <div>
            <h2>Name Surname</h2>
            <p>Username</p>
            <p>Email</p>
            <p>Phone</p>
            </div>
         </div>
       )
   }
}