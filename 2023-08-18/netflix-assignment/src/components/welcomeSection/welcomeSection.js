import TopTab from "./topTab";
import WelcomeText from "./welcomeText";

function WelcomeSection() {
  return (
    <div id="welcome" className="pb-56 border-b-4 border-gray-600">
      <div className="container mx-auto">
        <TopTab />
        <WelcomeText />
      </div>
    </div>
  );
}
export default WelcomeSection;
