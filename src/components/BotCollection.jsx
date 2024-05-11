import React from "react";
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

  // Split the bot list into chunks of 4 bots each
  const botRows = [];
  for (let i = 0; i < botList.length; i += 4) {
    botRows.push(botList.slice(i, i + 4));
  }

  // Create a row for each chunk of bots
  const botRowsElements = botRows.map((row, index) => (
    <div key={index} className="ui four cards">
      {row}
    </div>
  ));

  return (
    <div className="container">
      {botRowsElements}
    </div>
  );
}

export default BotCollection;
