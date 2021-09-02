import React,{ Component } from 'react';
import { getAuthors } from '../../../../Services/AuthorService';
import './ListOfAuthors.css';
import { Link } from "react-router-dom";

export class ListOfAuthors extends Component {
constructor(props){
    super(props);
    this.state = {
        authors: [],
    }
}
componentDidMount(){
    getAuthors() 
        .then(authors => {this.setState({authors}); 
});
}

render(){
    return(
<div className = 'container'>     
    <h2 style = {{textAlign: 'center', paddingBottom: '1em'}}> AUTHORS ({this.state.authors.length})</h2>
{
    this.state.authors.map((author,index) => {
    return (   
    <Link to = {`/author/${author.id}`}><p className ="listOfAuthors" key = {author.id}>{author.name}</p></Link>
)})
}
</div>
)};
   
}