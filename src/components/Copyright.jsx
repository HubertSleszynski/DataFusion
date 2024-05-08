import React from "react";

import { copyrightData } from "../data";

const Copyright = () => {
  const { text } = copyrightData;
  return (
    <section className="mt-24 pb-12" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-light italic">{text}</div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
