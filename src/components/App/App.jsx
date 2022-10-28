import React from 'react';
import axios from 'axios';
import './App.css';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentForm from '../CommentForm/CommentForm';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <CommentForm/>
      <FeelingForm/>
      <ReviewDisplay/>
      <SupportForm/>
      <UnderstandingForm/>
    </div>
  );
}

export default App;
