import "./Password.css";

import { useState, useEffect } from "react";
const Content = () => {
  const [generatePasswordLength, setGeneratePasswordLength] = useState(20);
  const [generateWithNumers, setGenerateWithNumers] = useState(true);
  const [generateWithSymbols, setGenerateWithSymbols] = useState(true);
  const [lastGeneratedPasswords, setLastGeneratedPasswords] = useState([]);
  const [lastPassword, setLastPassword] = useState("");

  useEffect(() => {
    function getRandomNumber(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    const symbolsPositions = [
      { name: "symbols", from: 33, to: 47, exceptions: [39, 34] },
      { name: "bigLetters", from: 65, to: 90, exceptions: [] },
      { name: "smallLetters", from: 97, to: 122, exceptions: [] },
    ];
    let generatedPassword = "";
    for (let i = 0; i < generatePasswordLength; i++) {
      const symbolArr = [];
      if (generateWithSymbols) {
        while (true) {
          const generatedNumber = getRandomNumber(
            symbolsPositions[0].from,
            symbolsPositions[0].to
          );
          if (!symbolsPositions[0].exceptions.includes(generatedNumber)) {
            symbolArr.push(String.fromCharCode(generatedNumber));
            break;
          }
        }
      }
      if (generateWithNumers) symbolArr.push(getRandomNumber(0, 9));
      const generateBigLetter = getRandomNumber(0, 1) === 0;
      if (generateBigLetter) {
        symbolArr.push(
          String.fromCharCode(
            getRandomNumber(symbolsPositions[1].from, symbolsPositions[1].to)
          )
        );
      } else {
        symbolArr.push(
          String.fromCharCode(
            getRandomNumber(symbolsPositions[2].from, symbolsPositions[2].to)
          )
        );
      }
      generatedPassword += symbolArr[getRandomNumber(0, symbolArr.length - 1)];
    }
    setLastPassword(generatedPassword);
    let parsedLastPasswords = JSON.parse(localStorage.getItem("lastPasswords"));
    console.log(parsedLastPasswords);
    if (!parsedLastPasswords) parsedLastPasswords = [];
    if (parsedLastPasswords.length < 10) {
      parsedLastPasswords.push(generatedPassword);
      localStorage.setItem(
        "lastPasswords",
        JSON.stringify(parsedLastPasswords)
      );
    } else {
      parsedLastPasswords.splice(0, 1);
      parsedLastPasswords.push(generatedPassword);
      localStorage.setItem(
        "lastPasswords",
        JSON.stringify(parsedLastPasswords)
      );
    }
    setLastGeneratedPasswords(parsedLastPasswords);
  }, [generateWithSymbols, generateWithNumers, generatePasswordLength]);
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <div className="w-[60%]">
        <span className="font-bold text-lg">Generated password:</span>
        <div
          className="w-full py-4 bg-white rounded-lg mt-2 mb-6"
          id="ringed"
          onClick={() => {
            const element = document.querySelector("#ringed");
            element.classList.toggle("ring-blue-400");
            element.classList.toggle("ring-[3px]");
          }}
        >
          <div className="text-black text-center text-2xl ">{lastPassword}</div>
        </div>
        <div className="bg-[#0d2840] border-2 border-[#08233b] rounded-lg w-full items-center justify-center py-4 flex flex-wrap gap-4">
          <label>
            <span>Length</span>
            <input
              type="number"
              value={generatePasswordLength}
              className="bg-transparent border rounded-lg ml-2 py-1 px-4"
              onChange={(e) => {
                setGeneratePasswordLength(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={generateWithNumers}
              className="scale-150 mr-2"
              onChange={(e) => {
                setGenerateWithNumers(e.target.checked);
              }}
            />
            <span>Numbers</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={generateWithSymbols}
              className="scale-150 mr-2"
              onChange={(e) => {
                setGenerateWithSymbols(e.target.checked);
              }}
            />
            <span>Symbols</span>
          </label>
        </div>
        <h2 className="text-center text-4xl font-bold mx-auto my-5">
          10 Last generated passwords:
        </h2>
        <div className="flex flex-col items-center">
          {lastGeneratedPasswords.map((value, index) => {
            return <div key={index}>{value}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
