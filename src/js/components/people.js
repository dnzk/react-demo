import React from 'react';
import Roll from './roll';
import axios from 'axios';

export default class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  render() {
    return <Roll list={this.state.people} />
  }
  componentDidMount() {
    axios.get('http://swapi.co/api/people/')
      .then(res => {
        this.setState({
          people: res.data.results
        });
      });
  }
}
