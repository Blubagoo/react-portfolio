import React from 'react';
import './styles/contact-details.css';

export default function (props) {
	console.log('contact-details props', props);
	return (
		<div className='contact-details'>
			<div className='well direction'>
				<p className='lg-text direction-banner'>What I want..</p>
				<p className='sm-text'>I am looking for a company that can help me achieve my own personal goals, a
						 place to help me become a great developer that brings real value to any team. I have a passion for 
						building tools that can help people learn at a more efficient rate. As such, I would love to
						work for a company that can teach me to do this.</p>
			</div>
		</div>
	);
}
