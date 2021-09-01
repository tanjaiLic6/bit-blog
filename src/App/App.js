
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from '../App/Components/Header/Header';
import { Posts } from '../../src/App/Components/Page1/Posts/Posts';
import { PostDetails } from './Components/Page1/Page1PostInfo/PostDetails/PostDetails';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      
      <Header />
      <Switch>
      <Route exact='/' path='/' component={Posts}/>
      <Route  path='/postsdetails/:id'  component={PostDetails}/>
       </Switch>
      <Footer />
      
    </div>
    </Router>
  )}

export default App;
