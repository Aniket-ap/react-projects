import React from "react";
import faker from "faker";

import "./App.css";
import Header from './Header';
import Card from "./Card";


const App = () => {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <section style={{backgroundColor:"#2e3035"}}>
      <div className="cards" >
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
        <Card image={faker.random.image()} title={faker.lorem.words()} />
      </div>
      </section>
    </div>
  );
};

export default App;
