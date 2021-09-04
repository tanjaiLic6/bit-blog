import React, { Component } from 'react';
import userIcon  from '../../../../../../src/Shared/userIcon.png';
import './NameInfo.css';


export class NameInfo extends Component {
   constructor(props){
        super(props);
    }

render(){
   console.log(this.props.nameInfo)
      return(   
         <div className = "d-flex nameInfo">
            <div>
               <img src = {userIcon} ></img>
            </div>

            <div>
            <h2>{this.props.nameInfo.name}</h2>
            <p>Username: {this.props.nameInfo.username}</p>
            <p>Email: {this.props.nameInfo.email}</p>
            <p>Phone: {this.props.nameInfo.phone}</p>
            </div>
         </div>
       )
   }
}