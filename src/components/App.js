import React from 'react';
import './styles/App.css';

import TopSection from './top-section';
import MidSection from './mid-section';
import BotSection from './bot-section';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <TopSection />
        <MidSection />
        <BotSection />
      </div>
    );
  }
}
