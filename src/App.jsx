// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

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
