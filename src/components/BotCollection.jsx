import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

const BotCollection = ({ botCollection, enlistBot }) => {
  return (
    <div className="container">
      <div className="ui three stackable cards">
        {botCollection.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
