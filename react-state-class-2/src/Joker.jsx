import React, { useEffect } from "react";
import { useState } from "react";

function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  const [joke, setJoke] = useState({});

  return (
    <div>
      <h1>Joker </h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}

export default Joker;
