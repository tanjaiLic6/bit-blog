import React,{Component}from 'react';
import { BlogPost } from '../../Page1/BlogPost/BlogPost';
import {getPosts} from '../../../../Services/BlogService';
import {BlogPosts} from '../../../../Entities/BlogPost';
import './Posts.css'
import { Link } from 'react-router-dom';

export class Posts extends Component {
constructor(props){
super(props);
this.state={
    posts:[]
};
}

componentDidMount(){
    getPosts() 
    .then(posts => {
        console.log(posts)
        this.setState({posts:posts})
        
        
})

};



render(){
    return(
<div className='posts container'>     
    <h2 style={{textAlign:'center',paddingBottom:'1em'}}>Posts</h2>
{
    this.state.posts.map((post,index)=>{
    while(index<11){ 
    
    return (   
     
    <BlogPost id = {post.id} title={post.title} content={post.body} />
)}})
}
</div>
)}
   
}