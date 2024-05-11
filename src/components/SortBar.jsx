import React from "react";
import { Button, Segment } from "semantic-ui-react";

export default function SortBar({ sortByArmor, sortByDamage, sortByHealth }) {
  return (
    <Segment basic textAlign="center">
      <p style={{ fontSize: "large", marginRight: "1em" }}>Sort By:</p>
      <Button basic color="blue" onClick={sortByHealth}>
        Health
      </Button>
      <Button basic color="blue" onClick={sortByDamage}>
        Damage
      </Button>
      <Button basic color="blue" onClick={sortByArmor}>
        Armor
      </Button>
    </Segment>
  );
}
