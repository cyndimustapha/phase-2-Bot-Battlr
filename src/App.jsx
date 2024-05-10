// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={BotCollection} />
        <Route exact path="/your-bot-army" component={YourBotArmy} />
        <Route exact path="/bots/:botId" component={BotSpecs} />
      </div>
    </Router>
  );
};

export default App;
