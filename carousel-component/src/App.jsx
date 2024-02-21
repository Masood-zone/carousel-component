import React from "react";
import Carousel from "./components/carousel";
import { slides } from "./data/carouselData.json";

function App() {
  return (
    <div>
      <Carousel data={slides} />
    </div>
  );
}

export default App;
