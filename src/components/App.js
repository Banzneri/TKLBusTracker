import React, { Component } from 'react';
import '../App.css';
import ajax from 'superagent';

// import components
import Map from './Map';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      filteredLines: []
    }
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header buttons={this.state.lines} addFilter={this.addFilter} removeFilter={this.removeFilter} title='TKL BUS TRACKER' author='Pasi Hanhijärvi'></Header>
        <Map filter={this.state.filteredLines}/>
      </div>
    );
  }

  componentWillMount() {
    this.getLines();
  }

  addFilter(f) {
    let newFilter = this.state.filteredLines;
    newFilter.push(f);
    this.setState({filteredLines: newFilter});
  }

  removeFilter(f) {
    let newFilter = this.state.filteredLines;
    const index = newFilter.indexOf(f);
    newFilter.splice(index, 1);
    this.setState({filteredLines: newFilter});
  }

  getLines() {
    let url = 'http://data.itsfactory.fi/journeys/api/1/lines';
    ajax.get(url)
        .end((error, response) => {
            if (!error && response) {
                let keys = Object.keys(response.body);
                let linesArr = keys.map(val => response.body[val]);
                let filtered = [];
                this.setState({lines: linesArr[2], filteredLines: filtered});
            } else {
                console.log('There was an error: ', error);
            }
        }
    );
  }
}

export default App;
