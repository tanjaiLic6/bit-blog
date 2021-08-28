import React,{Component}from 'react';




export class BlogPost extends Component {
  constructor(props){
      super(props)
  }

   render(){
       return(
           
         <div style={{borderBottom:' 1px solid black',marginBottom:'1em'}}>
             <h3 >{this.props.title}</h3>
             <p>{this.props.content}</p>
         </div>
       )
   }
}