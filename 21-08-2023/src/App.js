import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const [form, setForm] = useState({
    // vardas: " ",
    // pavarde: " ",
    // telefinas: " ",
    // zinute: " ",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h2>Teksto atvaizdavimas</h2>
      <form className="mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-2">{text}</div>
      </form>
      <h2>Formos duomenys</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Jusu vardas"
            name="vardas"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Jusu pavarde"
            name="pavarde"
            onChange={(e) => handleForm(e)}
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Telefonas"
            name="telefonas"
            onChange={(e) => handleForm(e)}
          ></input>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Zinute"
            name="zinute"
            onChange={(e) => handleForm(e)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Siusti</button>
      </form>
      <ul>
        <li>Vardas: {form?.vardas}</li>
        <li>Pavarde: {form?.pavarde}</li>
        <li>Telefonas: {form?.telefonas}</li>
        <li>Zinute: {form?.zinute}</li>
      </ul>
    </div>
  );
}

export default App;
