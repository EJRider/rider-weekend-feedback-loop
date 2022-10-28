import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// Takes in 
const feeling = (state=0, action)=>{
    switch(action.type){
        case 'STORE_FEELING':
            return action.payload;
    }
    return state;
}


const storeInstace = createStore(
    combineReducers({
        feeling,
        support,
        understanding,
        comment,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
