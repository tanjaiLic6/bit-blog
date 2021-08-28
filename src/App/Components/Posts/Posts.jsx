import React,{Component}from 'react';
import { BlogPost } from '../BlogPost/BlogPost';
import {getPosts} from '../../../Services/BlogService';
import './Posts.css'

export class Posts extends Component {
constructor(props){
super(props);
this.state={
    posts:[]
};
}

componentDidMount(){
    getPosts() 
    .then(posts => {this.setState({posts}) 
});
}

render(){
    return(
<div className='posts container'>     
    <h2 style={{textAlign:'center',paddingBottom:'1em'}}>Posts</h2>
{
    this.state.posts.map((post,index)=>{
    while(index<11){ 
    return (   
    <BlogPost id = {post.id} title={post.title.charAt(0).toUpperCase()+post.title.slice(1,post.title.lenght)} content={post.body.charAt(0).toUpperCase()+post.body.slice(1,50)+'...'} />
)}})
}
</div>
)}
   
}