import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import brewlogApp from './reducers';
import apiService from './middleware/api';
import wsService from './middleware/ws';
import { getBrewData, subscribeToCurrentBrew } from './actions';

const initialState = {
    brews: {
        current: {},
        available: []
    }
}
const store = createStore(brewlogApp, initialState, applyMiddleware(apiService, wsService));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

store.dispatch(getBrewData())
store.dispatch(subscribeToCurrentBrew())