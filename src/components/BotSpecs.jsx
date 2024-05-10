// BotSpecs.jsx
import React from "react";
import { Link } from "react-router-dom";

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Bot Specs</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">{bot.name}</h3>
          <p className="card-text">Class: {bot.bot_class}</p>
          <p className="card-text">Health: {bot.health}</p>
          <p className="card-text">Damage: {bot.damage}</p>
          <p className="card-text">Armor: {bot.armor}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to="/src/components/BotCollection.jsx" className="btn btn-primary mr-2">
          Back to Bot Collection
        </Link>
        <button className="btn btn-success" onClick={() => enlistBot(bot.id)}>
          Enlist Bot
        </button>
      </div>
    </div>
  );
};

export default BotSpecs;
