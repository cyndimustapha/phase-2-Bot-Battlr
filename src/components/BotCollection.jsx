import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BotCollection = ({ enlistBot, removeBotFromCollection }) => {
  const [bots, setBots] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);

  useEffect(() => {
    fetch("/backend/db.json")
      .then((response) => response.json())
      .then((data) => {
        setBots(data.bots);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEnlist = (bot) => {
    if (!enlistedClasses.includes(bot.bot_class)) {
      enlistBot(bot.id);
      setEnlistedClasses([...enlistedClasses, bot.bot_class]);
      removeBotFromCollection(bot.id); // Remove the enlisted bot from BotCollection
    } else {
      console.log(`Bot of class ${bot.bot_class} already enlisted.`);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Bot Collection</h2>
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{bot.name}</h3>
                <p className="card-text">Class: {bot.bot_class}</p>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEnlist(bot)}
                >
                  Enlist
                </button>
                <Link to={`/bots/${bot.id}`} className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
