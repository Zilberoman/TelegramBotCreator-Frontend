import React from 'react';
import '../styles/index.scss';
import { TelegramBotCreator } from './components'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TelegramBotCreator />
      </div>
    )
  }
}
