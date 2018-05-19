import React, { Component, PropTypes } from 'react';

export class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.question, this.state.answer);
  }

  handleChangeQuestion(event) {
    this.setState({question: event.target.value});
  }

  handleChangeAnswer(event) {
    this.setState({answer: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <input
						type="text"
						value={this.state.question}
						onChange={this.handleChangeQuestion} />
        </label>
        <label>
          Answer:
          <input
						type="text"
						value={this.state.answer}
						onChange={this.handleChangeAnswer} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
