import React from 'react';
import './styles/edu.css';

export default function (props) {
	console.log('edu props', props);
	return (
		<div className='education'>
			<p className='lg-text'>Education</p>
			<div className='edu'>
				<p className='md-text'>Thinkful</p>
				<p className='sm-text'>Full Stack Flex</p>
				<ul>
					<li>Front-End Fundamentals</li>
					<li>Git, Github, Asynchronous apps</li>
					<li>Server-side Fundamentals</li>
					<li>React/Redux</li>
				</ul>
				<p className='sub-text'>02/2018 - 08/2018</p>
			</div>
			<div className='edu'>
				<p className='md-text'>Fortis</p>
				<p className='sm-text'>HVAC-R</p>
				<ul>
					<li>Troubleshooting & problem solving</li>
					<li>Basic Thermodynamics</li>
					<li>Basic Electricity</li>
					<li>Motor Basics</li>
				</ul>
				<p className='sub-text'>09/2015 - 02/2016</p>
			</div>
			<div className='edu'>
				<p className='md-text'>Daniel 1 Academy</p>
				<p className='sm-text'>High School Diploma</p>
				<p>Graduated '07'</p>
			</div>
		</div>
	)
}
