import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/App.scss';
import './assets/css/body-widgets.css';
import './assets/css/main.css';
import './assets/css/nav.css';
import './assets/css/slider.css';
import './assets/css/switch.css';
import './assets/css/tabs.css';
import './assets/css/tooltip.css';
import './assets/fonts/razerf5.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
