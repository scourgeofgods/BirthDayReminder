import { useState } from "react";
import data from "./data";
import people from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <section className="birthday">
        <h1 className="title">{people.length} People Birthday</h1>
        <ul className="cards">
          {people.map((person) => {
            const { id, name, image, age } = person;
            return (
              <li className="cards-card" key={id}>
                <img src={image} alt="" className="card-img" />
                <div className="card-info">
                  <h3>{name}</h3>
                  <p>{age}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {people.length > 0 ? (
          <button className="card-btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        ) : (
          <button className=" card-btn" onClick={() => setPeople(data)}>
            Bring
          </button>
        )}
      </section>
    </div>
  );
}

export default App;
