import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/app'
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './services/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
