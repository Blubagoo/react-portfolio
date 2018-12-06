import React from 'react';
import './styles/header.css';

export default function (props) {
	console.log('header props', props);
	return (
		<div className='header'>
			<h1 className='banner'>Jim Tisdale</h1>
			<h2 className='sub-banner'>Junior Developer</h2>
		</div>
	);
}
