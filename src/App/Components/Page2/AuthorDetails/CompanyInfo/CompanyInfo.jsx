import React, { Component } from 'react';
import './CompanyInfo.css';

export class CompanyInfo extends Component {
   constructor(props){
        super(props);
    }

render(){
      return(   
         <div className = "d-flex companyInfo">
            <div><h2>Company</h2>
            <p>Name: {this.props.companyInfo?.company?.name}</p>
            <p>Slogan: {this.props.companyInfo?.company?.catchPhrase}</p>
            </div>
            <div>
            
            </div>
         </div>
       )
   }
}