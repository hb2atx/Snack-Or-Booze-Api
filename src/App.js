import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SnackOrBoozeApi from './Api';
import AddMenuItemForm from './components/AddMenuItemForm';
import FoodItem from './components/FoodItem';
import FoodMenu from './components/FoodMenu';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const snacksData = await SnackOrBoozeApi.getSnacks();
        const drinksData = await SnackOrBoozeApi.getDrinks();

        setSnacks(snacksData);
        setDrinks(drinksData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={ <Home snackCount={snacks.length} drinkCount={drinks.length} />} />
            <Route exact path="/snacks" element={<FoodMenu snacks={snacks} type="snacks" title="Snacks" />} />
            <Route exact path="/drinks" element={ <FoodMenu snacks={drinks} type="drinks" title="Drinks" />} />
            <Route path="/add" element={<AddMenuItemForm snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks/:id" element={<FoodItem items={snacks} type="snacks" cantFind="/snacks" />} />
            <Route path="/drinks/:id" element={<FoodItem items={drinks} type="drinks" cantFind="/drinks" />} />
              <p>Hmmm. I can't seem to find what you want.</p>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;