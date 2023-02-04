import React, { Component } from 'react';
import './Testing.css';

export default class Testing extends Component {
  constructor (props){
    super(props);
    this.state = {
    }
  };
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
          <li>{this.props.email}</li>
          <li>{this.props.username}</li>
        </ul>
      </div>
    )
  };
}
