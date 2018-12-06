import React from 'react';
import './styles/projects.css';
import flow from './styles/flow-icon.png';
import trivia from './styles/trivia-icon.png';
import sing from './styles/sing-icon.png';

export default function (props) {
	console.log('project props', props);
	return (
		<div className='project-area'>
			<p className='lg-text'>Projects</p>
			<div className='projects'>
				<div className='project'>
					<div className='front'>
						<a href='https://flow-state.herokuapp.com' target='_blank'><img src={flow} className='icon' alt='flow-state' /></a>
					</div>
				</div>
				<div className='project'>
					<div className='front'>
						<a href='https://trivia-challenger.herokuapp.com' target='_blank'><img src={trivia} className='icon' alt='Trivia Challenger' /></a>
					</div>
				</div>
				<div className='project'>
					<div className='front'>
						<a href='https://blubagoo.github.io/singngo/' target='_blank'><img src={sing} className='icon' alt='Sing n Go' /></a>
					</div>
				</div>
			</div>
		</div>
	);
}
