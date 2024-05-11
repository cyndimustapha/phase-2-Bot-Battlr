import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  const myArmyBots = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleSelect={removeBot}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <Segment inverted color="olive" className="bot-army">
      <Grid columns={5}>
        <Grid.Row className="bot-army-row">
          {myArmyBots}
          <Header as="h2" textAlign="center" className="bot-army-header">
            Your Bot Army
          </Header>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default YourBotArmy;
