import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const LocationCard = props => {

  // { name, type, dimension, residents }

  return (

    <div >
      <Card className="location-card">
        <CardBody>
          <CardTitle><h3>{props.location.name}</h3></CardTitle>
          <CardSubtitle> Type: {props.location.type}</CardSubtitle>
          <CardSubtitle>  Dimension: {props.location.dimension}</CardSubtitle>
          <CardSubtitle>  Residents: {props.location.residents.length}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )

  //<span>todo: location</span>;
}

export default LocationCard;