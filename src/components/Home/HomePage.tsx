import React from "react";

const HomePage = () => {
  return (
    <div className="relative max-w-6xl mx-0 my-auto">
      <div className="absolute w-1 bg-slate-500 top-0 bottom-0 left-1/2 -ml-[2px]"></div>
      <div className="px-3 relative w-1/2 left-0 border border-black">
        <div className="px-5 py-2 relative border border-black">
          <h2>2017</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <div className="absolute w-6 h-6 -right-4 bg-white border-red-500 border-2 top-0 rounded-full z-10"></div>
      </div>

      <div className="px-3 relative w-1/2 left-1/2 border border-black">
        <div className="px-5 py-2 relative border border-black">
          <h2>2017</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <div className="absolute w-6 h-6 -left-4 bg-white border-red-500 border-2 top-0 rounded-full z-10"></div>
      </div>
    </div>
  );
};

export default HomePage;
