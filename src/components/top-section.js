import React from 'react';
import './styles/top-section.css';
import Header from './header';
import ImpactArea from './impact-area';

export default function (props) {
	console.log('top section props', props);

	return (
		<div className='top'>
			<Header />
			<ImpactArea />
		</div>
	)
}
