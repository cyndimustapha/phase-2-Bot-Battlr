import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, handleSelect, deleteBot }) {
  const { id, avatar_url, bot_class, catchphrase, health, damage, armor } = bot;

  function handleDelete() {
    deleteBot(bot);
  }

  return (
    <Card onClick={() => handleSelect(bot)}>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{bot.name}</Card.Header>
        <Card.Meta>
          <span className="date">{bot.bot_class}</span>
        </Card.Meta>
        <Card.Description>{catchphrase}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="heartbeat" />
          {health}
        </span>
        <span>
          <Icon name="lightning" />
          {damage}
        </span>
        <span>
          <Icon name="shield" />
          {armor}
        </span>
        
      </Card.Content>
    </Card>
  );
}

export default BotCard;
