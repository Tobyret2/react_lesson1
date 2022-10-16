import React from 'react';
import './App.css';
import Person from "./components/show";
import ShowPerson from "./components/person";
import Form from "./components/form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Person />
          <ShowPerson />
          <Form />

      </div>
    );
  }
}

export default App;// Экспорт компонента в index.js
