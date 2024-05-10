import React, { useState } from 'react';

const YourBotArmy = () => {
  const [army, setArmy] = useState([]);

  const handleClick = (botId) => {
    // Check if the bot is already in the army
    const isEnlisted = army.some((bot) => bot.id === botId);
    if (!isEnlisted) {
      // Find the bot in the bots collection
      const botToAdd = bots.find((bot) => bot.id === botId);
      // Add the bot to the army
      setArmy([...army, botToAdd]);
    } else {
      // Remove the bot from the army
      const updatedArmy = army.filter((bot) => bot.id !== botId);
      setArmy(updatedArmy);
    }
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => handleClick(bot.id)}>Remove from Army</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
