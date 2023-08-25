import image from "../../assets/device-pile.png";
import TvText from "../secondSection/tvText";

function FourthSection() {
  return (
    <div className="border-b-4 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <TvText
          heading="Watch everywhere"
          text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <img src={image} alt="tv" />
      </div>
    </div>
  );
}

export default FourthSection;
