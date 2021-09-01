import React,{ Component } from 'react';
import {Header} from '../../../Header/Header'
import {Footer} from '../../../Footer/Footer'
import { postsEndpoint } from '../../../../../Shared/endpoints';
import { getAuthors } from '../../../../../Services/AuthorService';
import { authorEndpoint } from '../../../../../Shared/endpoints';
import { Posts } from '../../Posts/Posts';
import { getPosts } from '../../../../../Services/BlogService';
import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

export class PostDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:{},
            author:'name',
            authorNumPosts:0,
            authorPosts:[],
            singleId:''
          
            
        }
    }

 
 componentDidMount(){
   console.log(this.props.match)
    fetch(postsEndpoint+'/'+this.props.match.params.id)
    .then((res)=> res.json())
    .then((res)=>
      this.setState({post:res})
    
     )
     .then((res)=>{
        fetch(authorEndpoint+'/'+this.state.post.userId)
        .then((res)=>res.json())
       .then((res)=>this.setState({author:res.name}))
       .then(()=>{
           getPosts().then((res)=>res.filter((posts)=>
         posts.userId==this.state.post.userId  ))
         .then((res)=>{this.setState({authorNumPosts:res.length}); return res })
         .then((res)=>{this.setState({authorPosts:res})})
         .then(()=>console.log(this.state.authorPosts))
          
        })
           

     });
     
     

    
     
 }

 componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.componentDidMount()
    }
  }
  
 

    render()
    
 
    
    {

       
        return(
           
            <div>
             
               <h1>{this.state.post.title}</h1>
               <p>{this.state.author}</p>
               <p>{this.state.post.body}</p>
               <p>{this.state.authorNumPosts} more posts from this author</p>
               <ul> 
                   { this.state.authorPosts.map((post,index)=>{
                       
                      return  <Link to={`/postsdetails/${post.id}`} id={post.id}><p key={post.id}>{post.title}</p></Link>
                      
                   })
                     
                    }             
               </ul>
               
            </div>
            
        )
    }
}