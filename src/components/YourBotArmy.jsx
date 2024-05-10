// YourBotArmy.js
import React from "react";

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Your Bot Army</h2>
      <div className="row">
        {army.map((bot) => (
          <div key={bot.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{bot.name}</h3>
                <p className="card-text">Class: {bot.bot_class}</p>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => releaseBot(bot.id)}
                >
                  Release
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => dischargeBot(bot.id)}
                >
                  Discharge
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
