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


  //Takes in data when called, sends it to the server to put it into the database
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
        <h4>Please rate from 1-6</h4>
      </header>
      {/* The comment page , the fourth form the user fills */}
      <Route path='/comment' exact>
      <CommentForm/>
      </Route>
      {/* The feeling form, starting place for this app */}
      <Route path='/' exact>
      <FeelingForm/>
      </Route>
      {/* The review page, the last page the user will see before returning to the start */}
      <Route path='/review' exact>
      <ReviewDisplay submitReview={submitReview}/>
      </Route>
      {/* The support page, the second form the user fills */}
      <Route path='/support' exact>
      <SupportForm/>
      </Route>
      {/* The understanding page, the third form the user fills */}
      <Route path='/understanding' exact>
      <UnderstandingForm/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
