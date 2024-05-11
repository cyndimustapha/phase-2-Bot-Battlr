import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [showBotSpecs, setShowBotSpecs] = useState(false);
  const [myArmy, setMyArmy] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/bots")
      .then((res) => setBots(res.data))
      .catch((error) => console.error(`Could not fetch bots: ${error}`));
  }, []);

  function handleSelect(bot) {
    setSelectedBot(bot);
    setShowBotSpecs(true);
  }

  function handleGoBack() {
    setShowBotSpecs(false);
    setSelectedBot(null);
  }

  function handleEnlist(botEnlisted) {
    if (!myArmy.find((bot) => bot.id === botEnlisted.id)) {
      setMyArmy([...myArmy, botEnlisted]);
    }
  }

  function deleteFromMyArmy(selectedBot) {
    const updatedArmy = myArmy.filter((bot) => bot.id !== selectedBot.id);
    setMyArmy(updatedArmy);
  }

  function deleteBot(deletedBot) {
    const filteredBots = bots.filter((bot) => bot.id !== deletedBot.id);
    setBots(filteredBots);

    const updatedMyArmy = myArmy.filter((bot) => bot.id !== deletedBot.id);
    setMyArmy(updatedMyArmy);
  }

  const sortedBots = bots.slice().sort((a, b) => {
    switch (category) {
      case "armor":
        return b.armor - a.armor;
      case "health":
        return b.health - a.health;
      case "damage":
        return b.damage - a.damage;
      default:
        return 0;
    }
  });

  return (
    <div>
      <YourBotArmy
        bots={myArmy}
        removeBot={deleteFromMyArmy}
        deleteBot={deleteBot}
      />
      {showBotSpecs ? (
        <BotSpecs
          bot={selectedBot}
          handleGoBack={handleGoBack}
          handleEnlist={handleEnlist}
        />
      ) : (
        <>
          <SortBar
            sortByArmor={() => setCategory("armor")}
            sortByDamage={() => setCategory("damage")}
            sortByHealth={() => setCategory("health")}
          />
          <BotCollection
            bots={sortedBots}
            handleSelect={handleSelect}
            deleteBot={deleteBot}
          />
        </>
      )}
    </div>
  );
}

export default BotsPage;
