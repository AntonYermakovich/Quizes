import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore, compose, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import rootReducers from "./store/reducers/rootReducers"
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose

const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)