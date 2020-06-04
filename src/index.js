import React from 'react';
import ReactDOM from 'react-dom';
import { Provider , connect} from 'react-redux'
import { createStore,applyMiddleware, combineReducers } from 'redux'
import './index.css';
import 'tachyons' ;
import * as serviceWorker from './component/serviceWorker';
import App from './container/App'
import {searchRobots,fetchRobots} from "./reducers.js"
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk' //MIDDLEWARE USED TO PROCESS AN ACTION THAT RETURNS A FUNCTION


const logger = createLogger();
const rootReducer = combineReducers({searchRobots,fetchRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger))
console.log(store);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
