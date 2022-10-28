import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



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
