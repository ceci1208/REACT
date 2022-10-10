import React, { useEffect, useState } from 'react'
import Header from '../UI/Header';
import Instruments from '../UI/Instruments';
import Navbar from '../Styles/Navbar';
import Footer from "../Styles/Footer"
import MenuContext from '../Contexts/MenuContext';
import useHttp from '../hooks/use-http';
import CardObject from '../Styles/CardObject'

const App = () => {

  //const [meals, setMeals] = useState([]);
  const [instruments, setInstruments] = useState([]);
  
  // const BASE_URL = "https://react-http-a419f-default-rtdb.firebaseio.com";
  const BASE_URL = "https://react-finale-default-rtdb.firebaseio.com/"
  const { request } = useHttp();

  useEffect(() => {
    const fetchDish = async () => {
      const url = `${BASE_URL}/instruments.json`;
      const data = await request({ url })

      console.log("Data")
      setInstruments(data || []);
    };
    fetchDish();
  }, [request])

  return (
    <MenuContext.Provider value={instruments}>
      <Header />
      <Navbar />
      <Instruments />
      <Footer />
    </ MenuContext.Provider>
  );

}

export default App;
