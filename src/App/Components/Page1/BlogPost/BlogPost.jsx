import React,{Component}from 'react';
import { BrowserRouter, Link, Router,Switch,Route } from 'react-router-dom';
import { PostDetails } from '../Page1PostInfo/PostDetails/PostDetails';




export class BlogPost extends Component {
  constructor(props){
      super(props)

     
  }
  
  

  render(){
      
    
      return( 
       
     <Link to={`/postsdetails/${this.props.id}`}>
         <div onClick = {this.f} style={{borderBottom:' 1px solid black',marginBottom:'1em'}} >
            <h3 >{this.props.title.charAt(0).toUpperCase()+ this.props.title.slice(1,this.props.title.length) }</h3>
             <p>{this.props.content.charAt(0).toUpperCase()+this.props.content.slice(1,50)+'...'}</p>
         </div>
        </Link>
       )
   }
}