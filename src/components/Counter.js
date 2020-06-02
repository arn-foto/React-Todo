import React from 'react';

export default class Counter extends React.Component {
	render() {
		return (
			<div>
				<div>count: {this.props.count}</div>
				<button onClick={this.props.countUp}>increse</button>
				<button onClick={this.props.countDown}>decrement</button>
			</div>
		);
	}
}
