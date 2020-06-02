import React from 'react';
import shortid from 'shortid';
// using npm shortid to create a unique ID for the user instad of an index ID

export default class TodoForm extends React.Component {
	state = {
		text: ''
	};
	// this handle change  targets the name & updates it to the new value
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	// this function is the "add toto" function

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit({
			id: shortid.generate(),
			text: this.state.text,
			complete: false
		});
		// this resets the form to its original state after you hit submit
		this.setState({
			text: ''
		});
	};
	// created an input box for the ToDo form.
	// Also created an "Add" button to update the current state (adding the to do to the list)
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="text" value={this.state.text} onChange={this.handleChange} placeholder="Things to do.." />
				<button onClick={this.handleSubmit}>add it to the list</button>
			</form>
		);
	}
}
