
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from '../App/Components/Header/Header';
import { Posts } from '../../src/App/Components/Page1/Posts/Posts';
import { PostDetails } from './Components/Page1/Page1PostInfo/PostDetails/PostDetails';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { authorEndpoint } from '../Shared/endpoints';
import { ListOfAuthors } from './Components/Page2/ListOfAuthors/ListOfAuthors';
import { AuthorDetails } from './Components/Page2/AuthorDetails/AuthorDetails';
import { About } from './Components/About/About';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      
      <Header />
      <Switch>
      <Route exact='/' path='/' component={Posts}/>
      <Route path='/postsdetails/:id'  component={PostDetails}/>
      <Route path='/authors'  component={ListOfAuthors}/>
      <Route path='/author/:id' component={AuthorDetails}/>
      <Route path='/about' component={About}/>
       </Switch>
      <Footer />
      
    </div>
    </Router>
  )}

export default App;
