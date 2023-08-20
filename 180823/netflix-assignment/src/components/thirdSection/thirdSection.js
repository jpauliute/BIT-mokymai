import image from "../../assets/mobile-0819.jpg";

import TvText from "../secondSection/tvText";

function ThirdSection() {
  return (
    <div className="border-b-8 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <img src={image} alt="tv" />
        <TvText
          heading="Download your shows to watch offline"
          text="Save your favorites easily and always have something to watch."
        />
      </div>
    </div>
  );
}

export default ThirdSection;
