import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Titulinis puslapis</h1>
      <Link to="/about-us">Apie Mus</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/password">Password</Link>
      <Link to="/to-do">To-do</Link>
    </>
  );
};
export default Home;
