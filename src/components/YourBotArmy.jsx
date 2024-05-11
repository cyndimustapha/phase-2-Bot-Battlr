import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  const myArmyBots = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      handleSelect={removeBot}
      deleteBot={deleteBot}
    />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myArmyBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
