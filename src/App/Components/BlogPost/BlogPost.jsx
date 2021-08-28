import React,{Component}from 'react';

export class BlogPost extends Component {
  constructor(props){
      super(props)

      this.f =this.f.bind(this);
  }
  
  f(e){
    console.log(e.currentTarget)
  }

  render(){
      return(   
         <div onClick = {this.f} style={{borderBottom:' 1px solid black',marginBottom:'1em'}}>
             <h3 >{this.props.title}</h3>
             <p>{this.props.content}</p>
         </div>
       )
   }
}