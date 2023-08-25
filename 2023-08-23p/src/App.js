import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    // console.log(localStorage.getItem("paspaustas"));
    console.log("useEffect");
  }, [click]);

  return (
    <div>
      <button
        onClick={(e) => {
          localStorage.setItem("paspaustas", true);
          setClick(!click);
        }}
      >
        Paspausk
      </button>
    </div>
  );
};

export default App;
