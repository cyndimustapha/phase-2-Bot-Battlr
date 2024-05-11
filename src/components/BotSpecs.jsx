//BotSpecs.jsx
import React from "react";
import { Image, Segment, Button, Icon } from "semantic-ui-react";

const botTypeClasses = {
  Assault: "military",
  Defender: "shield",
  Support: "plus circle",
  Medic: "ambulance",
  Witch: "magic",
  Captain: "star",
};

function BotSpecs({ bot, handleEnlist, handleGoBack }) {
  return (
    <Segment>
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <Image
              alt="oh no!"
              size="medium"
              circular
              bordered
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <Icon name={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <Segment>
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <Icon name="heartbeat" color="red" circular />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <Icon name="lightning" color="yellow" circular />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <Icon name="shield" color="blue" circular />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </Segment>
            <Button fluid onClick={handleGoBack}>
              Go Back
            </Button>
            <Button fluid onClick={() => handleEnlist(bot)}>
              Enlist
            </Button>
          </div>
        </div>
      </div>
    </Segment>
  );
}

export default BotSpecs;
