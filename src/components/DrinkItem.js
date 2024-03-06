import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useParams, Redirect } from 'react-router-dom';

const DrinkItem = ({ drinks }) => {
  const { id } = useParams();

  // Check if drinks is defined and is an array
  if (!drinks || !Array.isArray(drinks)) {
    return <p>Drinks data not available</p>;
  }

  // Find the drink with the specified ID
  const drink = drinks.find(drink => drink.id === id);

  if (!drink) {
    return <Redirect to="/drinks" />;
  }

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default DrinkItem;