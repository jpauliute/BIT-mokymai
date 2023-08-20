import TvImage from "../secondSection/tvImage";

import TvText from "../secondSection/tvText";

function FourthSection() {
  return (
    <div className="border-b-4 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <TvText />

        <TvImage />
      </div>
    </div>
  );
}

export default FourthSection;
