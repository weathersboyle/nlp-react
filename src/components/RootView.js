import React, { Component } from 'react'

import api from '../api'
import InputForm from './InputForm'

export default class RootView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // TODO add state
    }
  }

  onSubmit = (input) => {
    api.analyzeStackOverflowQuestion(input)
      .then(
        data => console.log("success"),
        error => console.log("failure")
      )
  }

  render() {
    return (
      <InputForm
        onSubmit={this.onSubmit}
      />
    )
  }
}
