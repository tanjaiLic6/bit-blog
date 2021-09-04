import React, { Component} from 'react';
import { NameInfo } from '../../Page2/AuthorDetails/NameInfo/NameInfo';
import { AddressInfo } from '../../Page2/AuthorDetails/AddressInfo/AddressInfo';
import { CompanyInfo } from '../../Page2/AuthorDetails/CompanyInfo/CompanyInfo';
import { getSingleAuthor } from '../../../../Services/SingleAuthor';

export class AuthorDetails extends Component {
   constructor(props){
        super(props);
        this.state = {
            author: null,
            isLoading: true
        }
    }
componentDidMount(){
getSingleAuthor(this.props.match.params.id)
.then((author) => {this.setState({author, isLoading: false })})
}

render(){

    if(this.state.isLoading){
       return <h1>Loading...</h1>
    }

      return(!this.state.isLoading && !this.state.author
        ? <h1>No data to display</h1>   
         : <div>
             <NameInfo nameInfo = {this.state.author} />
             <AddressInfo addressInfo = {this.state.author} /> 
             <CompanyInfo companyInfo = {this.state.author} /> 

         </div>
       )
   }
}