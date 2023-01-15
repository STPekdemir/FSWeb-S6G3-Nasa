import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Title from "./Components/Title";
import Image from "./Components/Image";
import Explanation from "./Components/Explanation";

function App() {
  /*const [apiData, setApiData] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(apiData);*/
  const apiData = {
    date: "2023-01-15",
    explanation:
      "This is the mess that is left when a star explodes.  The Crab Nebula, the result of a supernova seen in 1054 AD, is filled with mysterious filaments.  The filaments are not only tremendously complex, but appear to have less mass than expelled in the original supernova and a higher speed than expected from a free explosion.  The featured image, taken by the Hubble Space Telescope, is presented in three colors chosen for scientific interest.  The Crab Nebula spans about 10 light-years.  In the nebula's very center lies a pulsar: a neutron star as massive as the Sun but with only the size of a small town.  The Crab Pulsar rotates about 30 times each second.   Discovery + Outreach: Graduate student research position open for APOD",
    hdurl: "https://apod.nasa.gov/apod/image/2301/CrabNebula_Hubble_3864.jpg",
    media_type: "image",
    service_version: "v1",
    title: "M1: The Crab Nebula from Hubble",
    url: "https://apod.nasa.gov/apod/image/2301/CrabNebula_Hubble_960.jpg",
  };
  return (
    <div className="App">
      <Title title={apiData.title} />
      <Image source={apiData.url} imageType={apiData.media_type} />
      <Explanation exp={apiData.explanation} />
    </div>
  );
}

export default App;
