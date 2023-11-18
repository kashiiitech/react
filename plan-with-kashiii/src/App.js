import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  const [objectList, setObjectList] = useState([]);
  const [isClickMeActive, setIsClickMeActive] = useState(false);


  function addTour(id) {
    setObjectList([...objectList, id]);

    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    
  }
  
  function ClickMe() {
    const interestedTours = data.filter(tour => objectList.includes(tour.id));
    setTours(interestedTours);
    setIsClickMeActive(true);
  }
  

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  
    if (isClickMeActive) {
      const newObjectList = objectList.filter(tourId => tourId !== id);
      setObjectList(newObjectList);
    }
  }
  

  if(tours.length === 0) {
    return (
      <div className="refresh">

        <h2>No Tours left</h2>
        <button className="btn-white" onClick={() => {
          setTours(data);
          setIsClickMeActive(false);
          }}>

          Refresh
        </button>


      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} addTour={addTour} ClickMe={ClickMe} isClickMeActive={isClickMeActive}></Tours>
    </div>
  );
};

export default App;
