import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const portfolio = document.getElementById('root');

ReactDOM.render(
	<App />, portfolio
);

registerServiceWorker();
