import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WelcomeSection from "./components/welcomeSection/welcomeSection";
import SecondSection from "./components/secondSection/secondSection";
import ThirdSection from "./components/thirdSection/thirdSection";
import FourthSection from "./components/fourthSection/fourthSection";
import FifthSection from "./components/fifthSection/fifthSection";
import Questions from "./components/questions/questions";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WelcomeSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Questions />
    <Footer />
  </React.StrictMode>
);
