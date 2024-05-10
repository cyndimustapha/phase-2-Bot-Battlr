// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/bot-collection" component={BotCollection} />
        <Route path="/your-bot-army" component={YourBotArmy} />
        <Route path="/bots/:botId" component={BotSpecs} />
      </Routes>
    </Router>
  );
};

export default App;
