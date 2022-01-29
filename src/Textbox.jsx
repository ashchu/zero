import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["hey so I may have gotten a little carried away with this",
				"but here we are so you better immerse yourself in the story experience",
				"so just, uhhhh, go along with it!!",
				"you have been kidnapped by the swexec team for high treason",
				"something along the lines of not making enough swemes and swuns? idk it was a kangaroo court",
				"in any case, you hear a voice over the speakers, it's ashley (that's me)",
				"'hey super sorry about kidnapping you but uhhh I made these puzzles for you they're enjoyable to solve yayayay'",
				"'in each stage you'll have to find clues that lead to a new link'",
				"'the clues might be hidden in plain sight, and each site may have the next link as well as a future clue'",
				"'If you're strugglin' and need any extra hints I gotchu, but everytime you do so will sub 3 seconds from your time left.'",
				"'oof my voice is a little HOARSE, so imma catch you guys later'"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 11,
					  index: 0
					 };

		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}

	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}

	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}

	renderBackwardsButton() {
		if (this.state.index === 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}

	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}

	renderContent() {
		if (this.state.index >= this.state.max - 1) {
			return <div className="content">
					     <img id="horse" alt="horse" src={require('./horse.jpg').default} />
					     <img id="roshan" alt="urfavs" src={require('./urfavs.JPG').default} />
						 <img id="chowder"alt="swetreatwoohoo.netlify.app.isthenextone" src={require('./swetreatwoohoo.netlify.app.isthenextone.jpg').default} />
					   </div>;
		}
		return null;
	}

	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();

		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;
