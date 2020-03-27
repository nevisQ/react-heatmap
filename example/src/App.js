import React, { Component } from 'react'

import ReactHeatmap from 'react-heatmap'

export default class App extends Component {
  state = {}

  componentDidMount() {
    this.setRandomData()
  }
  randFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setRandomData() {
    var data = [];
    var dotsCount = this.randFromInterval(50, 100);
    for (var i = 0; i < dotsCount; i++) {
      var x = this.randFromInterval(1, 200);
      var y = this.randFromInterval(1, 200);
      data.push({ x: x, y: y });
    }
    this.setState({ data: data });
  }

  render() {

    return (
      <div style={{ width: 200, height: 200 }}>
        <ReactHeatmap
          data={this.state.data}
          gradient={{
            '.3': '#8f9bc9',
            '.85': '#596590',
            '1': 'yellow'
          }}
          
        />
      </div>
    )
  }
}
