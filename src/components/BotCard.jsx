import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const BotCard = ({ bot, enlistBot }) => {
  return (
    <Card>
      <Image src={bot.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{bot.name}</Card.Header>
        <Card.Meta>
          <span className="date">Class: {bot.bot_class}</span>
        </Card.Meta>
        <Card.Description>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="blue" onClick={() => enlistBot(bot.id)}>
            Enlist
          </Button>
          <Button basic color="red">
            X
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default BotCard;
