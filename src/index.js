import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Heatmap from 'heatmapjs/build/heatmap.js'

export default class ReactHeatmap extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.heatmap = Heatmap.create({
			container: ReactDOM.findDOMNode(this),
			...this.props,
		});
		this.heatmap.setData({ ...this.props });
	}

	componentWillReceiveProps(newProps) {
		this.heatmap.setData({ ...newProps});
	}

	render() {
		return (
			<div style={{ width: '100%', height: '100%' }}></div>
		);
	}
}

ReactHeatmap.propTypes = {
	radius: PropTypes.number,
	data: PropTypes.array
}

ReactHeatmap.defaultProps = {
	data: [],
	gradient: {
		'.3': '#8f9bc9',
		'.85': '#596590',
		'.95': '#47557e'
	},
	radius: 20
}