import React from 'react';
import './styles/contact-header.css';

import headShot from './styles/headshot.jpg';

export default function (props) {
	console.log('contact-header props', props);
	return (
		<div className='contact-header'>
			<img src ={headShot} className='headshot' />
			<div className='info'>
				<p className='sm-text contact-header-text'>P: (334)500-0066</p>
				<p className='sm-text contact-header-text'>E: JCTisdale1988@gmail.com</p>
			</div>
		</div>
	);
}
