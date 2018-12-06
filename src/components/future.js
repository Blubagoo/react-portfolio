import React from 'react';

export default function (props) {
	console.log('future props', props);
	return (
		<div className='future'>
			<div className='future-header'>
				<h2 className='lg-text'>Where I am going..</h2>
			</div>
			<div className='future-content'>
				<p>I am passionate about learning and want to use this passion to create new educational tools. New tools might help students
						understand better, therefore pushing society to new heights. If we can improve understanding, we can transform our world into something
						we can be proud of.</p> 
			</div>
		</div>
	);
}
