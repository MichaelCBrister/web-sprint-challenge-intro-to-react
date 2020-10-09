

import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from "axios"
import styled from "styled-components"
import Character from "./components/Character"
const StyledApp = styled.div`
  h1{
    color: black;
    background-color: white;
  }
  .App {
    background-color: black;
    align-items: center;
    opacity: 65%;
    padding: 12%;
  }
  .content {
    border: 6px solid white;
    background-color: black;
  }`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [state, setStates] = useState([])
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res.data.results);
        setStates(res.data.results);
      })
      .catch(err => {
        
      })
  }, []) 
  return (
    <StyledApp>
      <div className="App">
        <h1 className = "Header">Characters</h1>
        <div className="content">
        {state.map(character =>{
                  return(
                    <Character
                    key = {character.name}
                    name = {character.name}
                  />
                  )
              })}
        </div>
      </div>
    </StyledApp>
  );
}

export default App;