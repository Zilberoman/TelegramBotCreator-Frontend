import React, { Component, PropTypes } from 'react';

import { createBotRequest, addStep } from './requests'
import { Field } from './field.jsx'

export class TelegramBotCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <button onClick={createBotRequest}> createSimpleGame </button>
        <br />
        <Field
          onSubmit={addStep}
        />
      </div>
    )
  }

}
