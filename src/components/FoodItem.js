import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const FoodItem = ({ items, type, cantFind }) => {
  const { id } = useParams();

  const item = items.find(item => String(item.id) === String(id));

  if (!item) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          {type === 'snacks' && item.recipe && (
            <p>
              <b>Recipe:</b> {item.recipe}
            </p>
          )}

          {type === 'snacks' && item.serve && (
            <p>
              <b>Serve:</b> {item.serve}
            </p>
          )}
        </CardBody>
      </Card>
    </section>
  );
};

export default FoodItem;