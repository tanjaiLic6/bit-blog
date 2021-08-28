import React,{Component} from 'react';
import { Menu } from '../Menu/Menu';
import './Header.css';


export class Header extends Component{





  render(){
      return(

     <div className='navbar container'>

     <h1>BIT BLOG</h1>
     <Menu />
     

   </div>





      )
  }


}