import React,{Component}from 'react';
import './Menu.css'



export class Menu extends Component {


   render(){
       return(
           <div className='d-flex menu'>
             <p>Home</p>
             <p className='authors'>Authors</p>
             <p>About</p>
           </div>
       )
   }
}