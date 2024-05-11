//BotCollection.jsx
import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleSelect, deleteBot }) {
  const botList = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleSelect={handleSelect}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div className="container">
      <div className="ui three stackable cards">{botList}</div>
    </div>
  );
}

export default BotCollection;
