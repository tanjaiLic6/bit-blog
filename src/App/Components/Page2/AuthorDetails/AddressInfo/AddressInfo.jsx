import React, { Component } from 'react';
import './AddressInfo.css';
// import { getAuthors } from '../../../../Services/AuthorService';

export class AddressInfo extends Component {
   constructor(props){
        super(props);
    }

render(){
   console.log(this.props)
    return(   
<div className = "d-flex addressInfo">
     <div className = "addressData">
        <h2>Address</h2>
        <p>Street: {this.props.addressInfo?.address?.street}</p>
        <p>City: {this.props.addressInfo?.address?.city}</p>
        <p>Zip code: {this.props.addressInfo?.address?.zipcode}</p>
      </div>
     <div className = "iframe">
     <iframe
        width="100%"
        height="100%"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title={this.props.addressInfo?.address?.city}
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://maps.google.com/maps?q=${this.props.addressInfo?.address?.geo?.lat},${this.props.addressInfo?.address?.geo?.lng}&z=15&output=embed`}
        // src={`https://maps.google.com/maps?q= ${this.props.addressInfo.address.geo.lat},${this.props.addressInfo.address.geo.lng}&z=15&output=embed`}
        />
    </div>
</div>
       )
   }
}