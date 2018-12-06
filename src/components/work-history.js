import React from 'react';
import './styles/work-history.css';
import { Work } from './work';

export default class WorkHistory extends React.Component {
	constructor(props) {
		super(props);
		console.log('work history props', props);
		this.state = {
			Work
		}
	}
	render() {
		const work = this.state.Work.map((job, index) => {
			const details = job.description.map((detail, detailIndex) => <li key={detailIndex} className='job-detail'>{detail}</li>)
			return (
				<div className='job well' key={index}>
					<p className='job-header md-text'>{job.company}</p>
					<p className='job-locale sub-text'>{job.location}</p>
					<p className='job-title sm-text'>{job.title}</p>
					<ul>
						{details}
					</ul>
					<p className='job-period sub-text'>{job.start} - {job.end}</p>
				</div>
			);
		});
		return (
			<div className='work-history sm-text'>
				<p className='lg-text'>Work History</p>
				{ work }
			</div>
		);
	}
}
