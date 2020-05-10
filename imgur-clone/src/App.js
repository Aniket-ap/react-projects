import React from "react";
import faker from "faker";

import "./App.css";
import Header from './Header';
import Card from "./Card";


const App = () => {
  return (
    <div>
      <Header/>
      <section className="cards">
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
      </section>
    </div>
  );
};

export default App;
