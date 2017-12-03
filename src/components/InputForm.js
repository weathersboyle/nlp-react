import React, { Component } from 'react'

import '../index.css';
import api from '../api'

export default class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  onSubmit = (event) => {
    const question = this.state.input
    api.analyzeStackOverflowQuestion(question)
      .then(
        data => console.log("success"),
        error => console.log("failure")
      )

    event.preventDefault()
  }

  render() {
    const prompt = 'Test your question!';

    return (
      <form
        className="InputForm"
        onSubmit={this.onSubmit}
      >
        <div
          className="InputForm_prompt"
        >
          {prompt}
        </div>
        <textarea
          className="InputForm_textarea"
          value={this.state.input}
          onChange={this.onChange}
        />
        <input
          className="InputForm_submit"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
