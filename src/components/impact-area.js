import React from 'react';
import './styles/impact-area.css';

import Profile from './profile';
import Projects from './projects';
import Future from './future';

export default function (props) {
	console.log('impact area props', props);
	return (
		<div className='impact-area'>
			<Profile />
			<Projects />
			<Future />
		</div>
	);
}
