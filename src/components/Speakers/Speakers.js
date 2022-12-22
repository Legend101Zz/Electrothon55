import React, { useEffect, useRef } from "react";
import speakerData from "./speakerdata.json";
import SpeakerCard from "./SpeakerCard";

const Speakers = ({ anchorID }) => {
  const ref = useRef(null);
  useEffect(
    (anchorID) => {
      if (anchorID === "speakers") {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [anchorID]
  );
  return (
    <section
      id="speakers"
      ref={ref}
      className="relative overflow-hidden mt-2 container-theme p-6"
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    >
      <h1 className="text-3xl tracking-tight md:text-4xl leading-normal md:leading-relaxed header-theme flex justify-center">
        Previous Speakers
      </h1>
      <div className="mt-5 md:mt-0">
        <div className="container mx-auto mt-8">
          <div className="flex flex-row flex-wrap -mx-2 justify-center">
            {speakerData.map((element, index) => {
              return <SpeakerCard key={index} judge={element} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Speakers.defaultProps = {
  anchorID: "",
};
export default Speakers;
