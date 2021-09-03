import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewPost.css';


export class NewPost extends Component{

    render()
    {
           
         return (
                
         <div className='new-Post'> 
              <h3>NEW POST</h3>
              <div>
                <label>Title</label>
                <input type='text'/> 
              </div>

              <div>
                  <label>Content</label>
                  <textarea rows="4" cols="50" />
              </div>
              <div className='btns'>
                 <Link to='/'><button >Cancel</button></Link>
                 <Link to='/'><button>Save</button></Link>
              </div>


         </div>



       ) 

    }
    
}