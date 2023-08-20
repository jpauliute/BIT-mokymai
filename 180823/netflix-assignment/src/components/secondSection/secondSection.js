import TvImage from "./tvImage";

import TvText from "./tvText";

function SecondSection() {
  return (
    <div className="border-b-4 border-gray-700">
      <div className="py-20 container mx-auto pl-20 flex gap-4">
        <TvText />

        <TvImage />
      </div>
    </div>
  );
}

export default SecondSection;
