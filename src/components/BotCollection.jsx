import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BotCollection = ({ history }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data.bots);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (botId) => {
    history.push(`/bots/${botId}`);
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => handleClick(bot.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
