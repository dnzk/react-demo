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
    for (let i = 1; i < 5; i += 1) {
      axios.get(`https://swapi.co/api/people/?page=${i}`)
        .then(res => {
          this.setState({
            people: this.state.people.concat(res.data.results)
          });
        });
    }
    /*
    axios.get('http://swapi.co/api/people/')
      .then(res => {
        this.setState({
          people: res.data.results
        });
      });
    */
  }
}
