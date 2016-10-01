import React from 'react';
import Roll from './roll';
import axios from 'axios';

export default class Planet extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }
  render() {
    return <Roll list={this.state.planets} />
  }
  componentDidMount() {
    axios.get('http://swapi.co/api/planets/')
      .then(res => {
        this.setState({
          planets: res.data.results
        });
      });
  }
}
