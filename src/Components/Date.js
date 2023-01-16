import React from "react";
import { useState } from "react";
import axios from "axios";

function Date({ setApiData }) {
  const [date, setDate] = useState("");

  const dateChanger = (event) => {
    setDate(event.target.value);
  };

  const urlChanger = (event) => {
    event.preventDefault();
    setApiData(null);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DsTnUe1HJiPVW0toA8CbCNUbOmxYTJ9Th2hcOxPE&date=${date}`
      )
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={urlChanger}>
        Date(Do not forget to use "-" while submitting):
        <input
          type="text"
          value={date}
          onChange={dateChanger}
          placeholder="YYYY-MM-DD"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Date;
