import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import AddMenuItemForm from '../components/AddMenuItemForm';

const AddMenuItem = ({ type }) => {
  const navigate = useNavigate();

  const handleAddItem = (newItem) => {
    // Implement logic to add the new item (snack or drink)
    console.log(`Adding a new ${type}:`, newItem);

    // Redirect to the appropriate menu page after adding the item
    navigate(`/${type}`);
  };

  return (
    <div>
      <h1>Add {type === 'snacks' ? 'Snack' : 'Drink'}</h1>
      <AddMenuItemForm type={type} onAdd={handleAddItem} />
      <Button onClick={() => history.push(`/${type}`)}>Cancel</Button>
    </div>
  );
};

export default AddMenuItem;