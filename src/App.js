import React, { useState } from "react";
import Top from "./Components/Top";
import DateDiv from "./Components/DateDiv";
import ToDoContainer from "./Components/ToDoContainer";


function App() {

  return (
    <div className="App">
      <Top />
      <DateDiv />
      <ToDoContainer />
    </div>
  );
}

export default App;
