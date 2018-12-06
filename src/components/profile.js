import React from 'react';
import './styles/profile.css';

export default function (props) {
	console.log('profile props', props);
	return (
		<div className='profile'>
			<div className='profile-header'>
				<p className='lg-text'>Who I am..</p>
			</div>
			<div className='profile-content'>
				<p>Self-starter with big ideas that hopefully will change the world.
						Great attention to detail with desire to learn in this ever-changing field.
						Takes pride in work and owns it when a mistake is made. Looking for the company
						that will take me to the next level.</p>
			</div>
		</div>
	);
}
