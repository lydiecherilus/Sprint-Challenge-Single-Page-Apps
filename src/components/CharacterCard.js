import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Row } from "reactstrap";


const CharacterCard = props => {
  console.log(props);

  return (
    <div >
      <Row sm="1" key={props.id}>
        <Card className="card-container">
          <CardBody>
            <CardTitle><h3>{props.character.name}</h3></CardTitle>
            <CardSubtitle> Name: {props.character.name}</CardSubtitle>
            <CardSubtitle> Status: {props.character.status}</CardSubtitle>
            <CardSubtitle> Species: {props.character.species}</CardSubtitle>
            <CardSubtitle> Gender: {props.character.gender}</CardSubtitle>
            <CardSubtitle> Location: {props.character.location.name}</CardSubtitle>
            <CardSubtitle> Origin: {props.character.origin.name}</CardSubtitle>
          </CardBody>
        </Card>
      </Row>
    </div>
  )
  // return <span>todo: character</span>;
}

export default CharacterCard;