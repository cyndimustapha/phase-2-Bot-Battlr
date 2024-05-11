import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  const myArmyBots = bots.map((bot) => {
    return (
      <div key={bot.id} style={{ margin: "10px" }}>
        <BotCard
          bot={bot}
          handleSelect={removeBot}
          deleteBot={deleteBot}
        />
      </div>
    );
  });

  return (
    <Segment inverted color="olive" className="bot-army">
      <Grid columns={5}>
        <Grid.Row className="bot-army-row">
          {myArmyBots}
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default YourBotArmy;
