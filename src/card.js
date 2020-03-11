import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react"

const FlashCard = ({
  deleteCard,
  front,
  back,
  id,
  edit,
  showBack,
  wrong,
  correct,
  toggleAnswer,
  
}) => (
  <>
    <Card>
      <Card.Content onClick={() => toggleAnswer(id)}>
        <Card.Header>{front}</Card.Header>
        <Card.Meta>Number of Times Correct:{correct}</Card.Meta>
        <Card.Meta>Number of Times Incorrect:{wrong}</Card.Meta>
        {showBack ? <Card.Description>{back}</Card.Description> : null}
      </Card.Content>
      <Card.Content extra>
        <Button color="purple" onClick={() => toggleAnswer(id)}>
          Show Answer
        </Button>
        {/* {console.log(toggleAnswer)} */}
        {/* {console.log(id)} */}
      </Card.Content>
      <Card.Content extra>
        <Button color="green">Correct</Button>
        <Button color="red">Incorrect</Button>
      </Card.Content>
      <Card.Content extra>
        <Button color="red" onClick={() => deleteCard(id)}>
          delete
        </Button>
        <Button color="blue">edit</Button>
      </Card.Content>
    </Card>
  </>
);

export default FlashCard;


