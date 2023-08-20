import image from "../../assets/1.png";

import TvText from "../secondSection/tvText";

function FifthSection() {
  return (
    <div className="border-b-8 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <img src={image} alt="tv" />
        <TvText
          heading="Create profiles for kids"
          text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
      </div>
    </div>
  );
}

export default FifthSection;
