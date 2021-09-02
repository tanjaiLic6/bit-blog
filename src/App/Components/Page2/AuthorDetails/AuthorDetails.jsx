import React, { Component} from 'react';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { NameInfo } from '../../Page2/AuthorDetails/NameInfo/NameInfo';
import { AddressInfo } from '../../Page2/AuthorDetails/AddressInfo/AddressInfo';
import { CompanyInfo } from '../../Page2/AuthorDetails/CompanyInfo/CompanyInfo';
import { Link } from "react-router-dom";

export class AuthorDetails extends Component {
   constructor(props){
        super(props);
    }

render(){
      return(   
         <div>

             <NameInfo />
             {/* <AddressInfo />
             <CompanyInfo /> */}

         </div>
       )
   }
}