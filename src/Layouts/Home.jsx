import React from "react";
import Banner from "../Components/Banner";

import Campaings from "../Components/NewCampaing";
import Contributor from "../Components/Contributor";
import Upgrade from "../Components/Upgrade";

export default function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="mx-auto">
        <Contributor></Contributor>
      </div>
      <div>
        <Upgrade></Upgrade>
      </div>
    </>
  );
}
