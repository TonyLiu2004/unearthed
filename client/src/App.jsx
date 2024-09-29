import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Gifts from './pages/Gifts'
import GiftDetails from './pages/GiftDetails'
import PageNotFound from './pages/PageNotFound'
import { Link } from 'react-router-dom'


const App = () => {
  
  const [gifts, setGifts] = useState([]);


  useEffect(() => {
    const fetchGifts = async () => {
        const response = await fetch('http://localhost:3001/gifts'); //MAKE SURE THE ROUTE IS CORRECT!! IT DEFAULTS TO 3000
        //by default, when you use fetch('/gifts'), the browser tries to make the request to the same origin (i.e., the same domain and port) as your front-end application.
        const data = await response.json();
        setGifts(data);
    };
    fetchGifts();
  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Gifts data={gifts}/>
    },
    {
      path:"/gift/:id",
      element: <GiftDetails data={gifts} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png"/>
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;