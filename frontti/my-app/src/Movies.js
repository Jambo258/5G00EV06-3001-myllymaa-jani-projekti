import React from "react";

import { Card, Grid } from "semantic-ui-react";

function Movies(props) {
  return (
    <div>
      <h2>Characters movies</h2>
      <Grid columns={4}>
        {props.characters.map((item, i) => {
          return (
            <Grid.Column key={i}>
              <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}>
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>
                    <strong>Movies</strong>

                    {item.movies}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default Movies;
