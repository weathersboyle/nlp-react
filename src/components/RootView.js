import React, { Component } from 'react'

import '../index.css'
import api from '../api'
import InputForm from './InputForm'

export default class RootView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestedTags: [],
      tips: [],
      similarQuestionUrl: ''
    }
  }

  onSubmit = (input) => {
    api.analyzeStackOverflowQuestion(input)
      .then(
        data => this.setState(data),
        error => console.log("failure")
      )
  }

  createPrimaryTopicText = () => {
    const { suggestedTags } = this.state
    var text = ''
    if (suggestedTags.length > 0) {
      text = 'You must be talking about: ' + suggestedTags[0]
    }
    return text
  }

  createSuggestedTagsText = () => {
    const { suggestedTags } = this.state
    if (suggestedTags.length === 0) {
      return ''
    }
    var text = 'We recommend using these tags: '
    var i
    const numTags = suggestedTags.length
    for (i = 0; i < numTags; i++) {
      text += suggestedTags[i]
      if (i < numTags - 1) {
        text += ', '
      }
    }
    return text
  }

  renderTips = () => {
    const { tips } = this.state
    if (tips.length > 0) {
      return (
        <div
          className="RootView_tips"
        >
          <div>
            Here are some tips to consider:
          </div>
          <ul>
            {tips.map((tip) => {return <li key={tip}>{tip}</li>})}
          </ul>
        </div>
      )
    }
  }

  renderSimilarQuestionPrompt = () => {
    const { similarQuestionUrl } = this.state
    if (similarQuestionUrl) {
      return (
        <div
          className="RootView_similarQuestionPrompt"
        >
          <div>
            Finally, make sure your question has not already been asked
          </div>
          <a
            className="RootView_similarQuestionLink"
            href={this.state.similarQuestionUrl}
          >
            here
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <InputForm
          onSubmit={this.onSubmit}
        />
        <div
          className="RootView_primaryTopic"
        >
          {this.createPrimaryTopicText()}
        </div>
        <div
          className="RootView_suggestedTags"
        >
          {this.createSuggestedTagsText()}
        </div>
        {this.renderTips()}
        {this.renderSimilarQuestionPrompt()}
      </div>
    )
  }
}
