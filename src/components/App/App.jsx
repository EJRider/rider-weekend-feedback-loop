import React from 'react';
import axios from 'axios';
import './App.css';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentForm from '../CommentForm/CommentForm';
import { HashRouter as Router, Route} from 'react-router-dom';



function App() {

  const submitReview = (feedback)=>{
    axios.post('/feedback', feedback)
      .then(response => {
        console.log('adding review!', response);
      })
      .catch(err => {
        console.error('something went wrong!', err);
      });
  };

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path='/comment' exact>
      <CommentForm/>
      </Route>
      <Route path='/' exact>
      <FeelingForm/>
      </Route>
      <Route path='/review' exact>
      <ReviewDisplay submitReview={submitReview}/>
      </Route>
      <Route path='/support' exact>
      <SupportForm/>
      </Route>
      <Route path='/understanding' exact>
      <UnderstandingForm/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
