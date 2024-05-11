import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleSelect, deleteBot }) {
  const botList = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      handleSelect={handleSelect}
      deleteBot={deleteBot}
    />
  ));

  return <div className="container">{botList}</div>;
}

export default BotCollection;
