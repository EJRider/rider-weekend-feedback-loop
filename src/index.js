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
        case 'RESET':
            return 0;
    }
    return state;
}

const support = (state=0, action)=>{
    switch(action.type){
        case 'STORE_SUPPORT':
            return action.payload;
        case 'RESET':
            return 0;
    }
    return state;
}

const understanding = (state = 0, action)=> {
    switch(action.type){
        case 'STORE_UNDERSTANDING':
            return action.payload;
        case 'RESET':
            return 0;
    }
    return state;
}

const comment = (state='',action)=>{
    switch(action.type){
        case 'STORE_COMMENT':
            return action.payload;
        case 'RESET':
            return ''
    }
    return state;
}

const feedback = (state={}, action)=>{
    switch(action.type){
        case 'BUNDLE_FEEDBACK':
            return action.payload;
        case 'RESET':
            return {};
    }
    return state;
}



const storeInstace = createStore(
    combineReducers({
        feeling,
        support,
        understanding,
        comment,
        feedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstace}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
