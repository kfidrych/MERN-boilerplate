import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage
} from "../../utils/storage"; 

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signInError: "",
      signInEmail: "",
      signInPassword: ""
    };
  };

  componentDidMount() {
    const token = getFromStorage('the_main_app');
    if (token) {
      fetch('/api/account/verify?token' + token)
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              this.setState({
                token: token,
                isLoading: false
              })
            } else {
              this.setState({
                isLoading: false
              })
            }
          });
    } else {
      this.setState({
        isLoading: false
      })
    }
  };

  //   this.newCounter = this.newCounter.bind(this);
  //   this.incrementCounter = this.incrementCounter.bind(this);
  //   this.decrementCounter = this.decrementCounter.bind(this);
  //   this.deleteCounter = this.deleteCounter.bind(this);

  //   this._modifyCounter = this._modifyCounter.bind(this);
  // }

  // componentDidMount() {
  //   fetch('/api/counters')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         counters: json
  //       });
  //     });
  // }

  // newCounter() {
  //   fetch('/api/counters', { method: 'POST' })
  //     .then(res => res.json())
  //     .then(json => {
  //       let data = this.state.counters;
  //       data.push(json);

  //       this.setState({
  //         counters: data
  //       });
  //     });
  // }

  // incrementCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
  //     .then(res => res.json())
  //     .then(json => {
  //       this._modifyCounter(index, json);
  //     });
  // }

  // decrementCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
  //     .then(res => res.json())
  //     .then(json => {
  //       this._modifyCounter(index, json);
  //     });
  // }

  // deleteCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}`, { method: 'DELETE' })
  //     .then(_ => {
  //       this._modifyCounter(index, null);
  //     });
  // }

  // _modifyCounter(index, data) {
  //   let prevData = this.state.counters;

  //   if (data) {
  //     prevData[index] = data;
  //   } else {
  //     prevData.splice(index, 1);
  //   }

  //   this.setState({
  //     counters: prevData
  //   });
  // }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>)
    }

    if (!token) {
      return (
        <div>
          <p>Sign Up</p>
          <p>Sign In</p> 
        </div>
      )
    }

    return (
      <div>
        <p>Account</p>
      </div>
    );
  }
}

export default Home;
