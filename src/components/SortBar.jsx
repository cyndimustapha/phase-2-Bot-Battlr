// SortBar.jsx
import React from "react";
import { Button, Segment } from "semantic-ui-react";

const SortBar = ({ handleSort }) => {
  return (
    <Segment basic textAlign="center">
      <h3>Sort by:</h3>
      <Button.Group>
        <Button basic color="blue" onClick={() => handleSort("health")}>
          Health
        </Button>
        <Button basic color="blue" onClick={() => handleSort("damage")}>
          Damage
        </Button>
        <Button basic color="blue" onClick={() => handleSort("armor")}>
          Armor
        </Button>
      </Button.Group>
    </Segment>
  );
};

export default SortBar;
