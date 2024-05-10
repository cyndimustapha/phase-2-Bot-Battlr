import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import { Icon, Card, Image, Button } from "semantic-ui-react";

const BotCollection = ({ enlistBot, removeBotFromCollection }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("/backend/db.json")
      .then((response) => response.json())
      .then((data) => {
        setBots(data.bots);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Bot Collection</h2>
      <div className="ui three stackable cards">
        {bots.map((bot) => (
          <div key={bot.id} className="ui card">
            <BotModal bot={bot} />
            <div className="image">
              <Image src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name}
                <Icon name={botTypeClasses[bot.bot_class]} />
              </div>
              <div className="meta text-wrap">
                <small>{bot.catchphrase}</small>
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <Button
                  basic
                  color="blue"
                  onClick={() => enlistBot(bot.id)}
                >
                  Enlist
                </Button>
                <Button basic color="red">
                  X
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
