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
        <div>
        <ul>
          <li>Name : {this.props.name}</li>
          <li>Age : {this.props.age}</li>
          <li>Email : {this.props.email}</li>
          <li>Username : {this.props.username}</li>
        </ul>
        </div>
      </div>
    )
  };
}
