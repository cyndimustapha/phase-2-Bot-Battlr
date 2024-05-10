import React from 'react';
import { Link } from 'react-router-dom';

const BotSpecs = ({ bot, onEnlist }) => {
  return (
    <div>
      <h2>Bot Specs</h2>
      <div className="bot-details">
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
      </div>
      <div>
        <Link to="/">Back to Bot Collection</Link>
        <button onClick={() => onEnlist(bot.id)}>Enlist Bot</button>
      </div>
    </div>
  );
};

export default BotSpecs;
