import TvImage from "../secondSection/tvImage";

import TvText from "../secondSection/tvText";

function FifthSection() {
  return (
    <div className="border-b-8 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <TvImage />
        <TvText />
      </div>
    </div>
  );
}

export default FifthSection;
