import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Col, Container, Row } from 'reactstrap';
import AddItem from './AddItem';
import '../styles/AddMenuItemForm.css';

function AddMenuItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('snacks'); // Default to snacks
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      description,
      // Add more properties based on your data structure
    };

    try {
      // Use AddItemApi to add the item
      await AddItem.addItem(newItem, type);

      // Redirect to the appropriate menu page after adding the item
      navigate(`/${type}`);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardBody>
              <CardTitle className="text-center">
                <h3>Add {type === 'snacks' ? 'Snack' : 'Drink'}</h3>
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Input
                    type="select"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="snacks">Snack</option>
                    <option value="drinks">Drink</option>
                  </Input>
                </FormGroup>
                <Button type="submit" color="primary">
                  Add {type === 'snacks' ? 'Snack' : 'Drink'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddMenuItemForm;