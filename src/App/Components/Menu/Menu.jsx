import React,{Component}from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';



export class Menu extends Component {


   render(){
       return(
           <div className='d-flex menu'>
            <Link to='/'> <p>Home</p></Link> 
            <Link to='/authors'><p className='authors'>Authors</p></Link> 
            <Link to='/about'><p>About</p></Link> 
           </div>
       )
   }
}