import React from 'react';

export default function (props) {
	console.log('code-review props', props);
	return (
		<div className='code-review well'>
			<p className='md-text code-banner'>Code Review & Social Media</p>
			<p className='sm-text'>I am sure you will want to check out some of my work behind the scenes.
			 Please feel free to review my github page and see the progression.</p>
			<div id='foot'>
					<a className='info' href='http://www.github.com/blubagoo' target='_blank'><i className='fa fa-github-square fa-2x' aria-hidden='true' /></a>
					<a className='info' href='https://www.linkedin.com/in/jim-tisdale-a78a73140/' target='_blank'><i className='fa fa-linkedin-square fa-2x' aria-hidden='true' /></a>
			</div>
		</div>
	);
}
