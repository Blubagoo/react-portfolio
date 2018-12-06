import React from 'react';
import './styles/mid-section.css';
import Skillset from './skillset';
import WorkHistory from './work-history';
import Edu from './edu';

export default function (props) {
	console.log('mid section props,', props);
	return (
		<div className='mid'>
			<div className='mid-banner'>
				<p className='mid-banner-txt lg-text'>About me</p>
			</div>
			<div className='mid-content'>
				<Skillset />
				<WorkHistory />
				<Edu />
			</div>
		</div>
	);
}
