import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Home({ snackCount, drinkCount }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">Welcome to Snack or Booze!</p>
          </CardTitle>
          <p>We have {snackCount} snacks and {drinkCount} drinks available.</p>
          <p>Explore our menus:</p>
          <Link to="/snacks">Snacks Menu</Link>
          <br />
          <Link to="/drinks">Drinks Menu</Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;