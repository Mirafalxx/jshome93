import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import {Provider} from 'react-redux';
import history from './history'
import App from './App';



const app=(
    <Router history={history}>
      <App/>
    </Router>

)

ReactDOM.render(app,document.getElementById('root'));
