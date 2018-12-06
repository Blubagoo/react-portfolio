import React from 'react';
import './styles/skillset.css'

export default class SkillSet extends React.Component {
	constructor(props) {
		super(props);
		console.log('skillset props', props);
		const skills = [
			{ name: 'Management' },
			{ name: 'Sales' },
			{ name: 'Mobile' },
			{ name: 'SEO' },
			{ name: 'A11y' },
			{ name: 'Communication' },
			{ name: 'HTML' },
			{ name: 'CSS' },
			{ name: 'Javascript' },
			{ name: 'Bootstrap' },
			{ name: 'React' },
			{ name: 'Redux' },
			{ name: 'Node' },
			{ name: 'Express' },
			{ name: 'Mocha' },
			{ name: 'Chai' },
			{ name: 'Enzyme' },
			{ name: 'jQuery' },
			{ name: 'Chartjs' },
			{ name: 'Corel' },
			{ name: 'Git' },
			{ name: 'Travis-CI' }
		]
		this.state = {
			skills
		};
	}
	render() {
		const skillTree = this.state.skills.map((skill, index) => {
			return (
				<div className='skill-box' id={'skill.' + skill.name} key={index}>
					<p className='sm-text'>{skill.name}</p>
					<div className='skill'>
						<div className='skill-level' id={skill.name} />
					</div>
				</div>
			)
		})
		return (
			<div className='skills'>
				<p className='lg-text' id='sk-banner'>Skills / Keywords</p>
				<div className='skillset'>
					{ skillTree }
				</div>
			</div>
		);
	}
}
