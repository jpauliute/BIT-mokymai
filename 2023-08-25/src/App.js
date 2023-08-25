import "./App.css";

function App() {
  return (
    <>
      <User name="a" lastName="a" />
      <User name="b" lastName="b" />
      <Heading heading="Kazkoks tekstas" />
      <Button text="Mygtukas" />
      <br></br>
      <Form logIn="Log In" password="password" email="E-mail" age="Age:" />
      <br></br>
    </>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.lastName}</h1>
    </div>
  );
};

const Heading = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
};

const Form = (props) => {
  return (
    <div>
      <form>
        <label>
          <p>{props.logIn}</p>
        </label>
        <input placeholder="Log-in" required />
        <br />
        <label>
          <p>{props.password}</p>
        </label>
        <input type="password" placeholder="Password" required />
        <br />
        <label>
          <p>{props.email}</p>
        </label>
        <input type="email" placeholder="E-mail" required />
        <br />
        <br />
        <label>
          <p>{props.age}</p>
        </label>
        <input type="number" min="1" max="200" required />
        <br />
        <br />
        <label>Birthday</label>
        <br />
        <input type="date"></input>
        <br />
        <br />
        <button type="reset">Reset</button>
        <button type="sumbit">Submit</button>
        <div>
          <p>Favourite food</p>
          <label>Banana</label>
          <input type="checkbox"></input>
          <br />
          <label>Apple</label>
          <input type="checkbox"></input>
          <br />
          <label>Pear</label>
          <input type="checkbox"></input>
          <br />
          <label>Peach</label>
          <input type="checkbox"></input>
          <br />
          <br />
          <label>Male</label>
          <input type="radio" name="gender" />
          <label>Female</label>
          <input type="radio" name="gender" />
          <br />
          <br />
          <label>Eye color</label> <br />
          <select multiple>
            <option>Green</option>
            <option>Blue</option>
            <option>Brown</option>
            <br />
            <br />
          </select>
          <br />
          <br />
          <label>Zinute</label>
          <br />
          <textarea placeholder="Irasykite zinute"></textarea>
        </div>
        <label>File</label>
        <input type="file"></input>
      </form>
    </div>
  );
};

export default App;
