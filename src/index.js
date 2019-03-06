import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';


const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));

