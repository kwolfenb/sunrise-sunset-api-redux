import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = (state=initialState, action) => {
    // let lat;
    // let long;
    switch (action.type) {
        case 'CALCULATE':
        const {lat, long} = action;
        let newState = Object.assign({}, state, {
        lat: lat,
        long: long
    });
        return newState;
        default: 
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));


const initialState = {
    lat: 0, 
    long: 0
}