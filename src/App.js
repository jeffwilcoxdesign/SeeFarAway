import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.nationalize.io/?name=michael")
      .then(res => res.json())
      .then(
        (result) => {
          const countries = result.country;
          console.log('API Data:', countries);
          setIsLoaded(true);
          setItems(countries);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then(
        // now let's format the next api request...

      )
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {items.map(item => (
              <li key={item.country_id}>
                {item.country_id} {item.probability}
              </li>
            ))}
          </ul>
        </header>
        {
          (error) ? <div className="DevNotification">Error: {error.message}</div> : <div />
        }
      </div >
    );
  }
}

export default App;
