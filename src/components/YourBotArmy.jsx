import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div className="container">
      <div className="ui three stackable cards">
        {army.map((bot) => (
          <div key={bot.id} className="ui card">
            <div className="image">
              <Image src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">{bot.name}</div>
              <div className="meta">
                <span className="date">Class: {bot.bot_class}</span>
              </div>
              <div className="description">
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <Button basic color="red" onClick={() => releaseBot(bot.id)}>
                  Release
                </Button>
                <Button
                  basic
                  color="yellow"
                  onClick={() => dischargeBot(bot.id)}
                >
                  Discharge
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
