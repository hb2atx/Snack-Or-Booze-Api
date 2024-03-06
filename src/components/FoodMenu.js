import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import SnackOrBoozeApi from '../Api';
import '../styles/FoodMenu.css';

function FoodMenu({ type }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiMethod;
        if (type === 'snacks') {
          apiMethod = SnackOrBoozeApi.getSnacks;
        } else if (type === 'drinks') {
          apiMethod = SnackOrBoozeApi.getDrinks;
        }

        if (apiMethod) {
          const data = await apiMethod();
          setItems(data);
        }
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {`${type.charAt(0).toUpperCase() + type.slice(1)} Menu`}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <ListGroup>
              {items.length === 0 ? (
                <p>No {type} available.</p>
              ) : (
                items.map(item => (
                  <Link to={`/${type}/${item.id}`} key={item.id}>
                    <ListGroupItem>{item.name}</ListGroupItem>
                  </Link>
                ))
              )}
            </ListGroup>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;