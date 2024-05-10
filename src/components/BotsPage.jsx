import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const BotsPage = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [botCollection, setBotCollection] = useState([]);

  // Function to enlist a bot
  const enlistBot = (botId) => {
    // Find the bot from the collection based on its ID
    const botToAdd = botCollection.find((bot) => bot.id === botId);
    // Add the bot to the enlistedBots array
    setEnlistedBots([...enlistedBots, botToAdd]);
  };

  // Function to release a bot
  const releaseBot = (botId) => {
    // Remove the bot with the given ID from the enlistedBots array
    const updatedBots = enlistedBots.filter((bot) => bot.id !== botId);
    setEnlistedBots(updatedBots);
  };

  useEffect(() => {
    fetch("/backend/db.json")
      .then((response) => response.json())
      .then((data) => {
        setBotCollection(data.bots);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <YourBotArmy army={enlistedBots} releaseBot={releaseBot} />
      <BotCollection botCollection={botCollection} enlistBot={enlistBot} />
    </div>
  );
};

export default BotsPage;
