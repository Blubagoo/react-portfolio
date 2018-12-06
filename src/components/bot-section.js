import React from 'react';
import './styles/bot-section.css';
import ContactHeader from './contact-header';
import ContactDetails from './contact-details';
import CodeReview from './code-review';

export default function (props) {
	console.log('bot section props, ', props);
	return (
		<div>
			<div className='bot-header'>
				<p className='lg-text'>Contact Me</p>
			</div>
			<div className='bot'>
				<ContactHeader />
				<ContactDetails />
				<CodeReview />
			</div>
		</div>
	);
}
