import React,{Component}from 'react';
import { ListOfAuthors } from '../ListOfAuthors';

export class SingleAuthor extends Component {
   constructor(props){
        super(props);
    }

render(){
      return(   
         <div style={{borderBottom:' 1px solid black', marginBottom:'1em'}}>
             <p>{this.props.authors.name}</p>
         </div>
       )
   }
}