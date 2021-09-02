import React,{ Component } from 'react';
import { getAuthors } from '../../../Services/AuthorService';
import { SingleAuthor } from '../SingleAuthor/SingleAuthor';

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
<div className = 'listOfAuthors container'>     
    <h2 style = {{textAlign: 'center', paddingBottom: '1em'}}> AUTHORS </h2>
{
    this.state.authors.map((author,index) => {
    while( index < 11 ){ 
    return (   
    <SingleAuthor name = {author} />
)}})
}
</div>
)};
   
}