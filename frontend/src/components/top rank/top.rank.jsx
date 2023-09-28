import React from "react";

const TopRank = {
  TopBannedHero: () => {
    return (
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-72 w-72 rounded-full object-cover object-top"
            src="./assets/heros/floryn.jpg"
            alt="nature image"
          />
          <h2>Floryn - 54.61%</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-96 w-96 rounded-full object-cover object-top"
            src="./assets/heros/valir.jpg"
          />
          <h2>Valir - 59.94%</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-72 w-72 rounded-full object-cover object-top"
            src="./assets/heros/estes.jpg"
            alt="nature image"
          />
          <h2>Estes - 54.53%</h2>
        </div>
      </div>
    );
  },
  TopPickHero: () => {
    return (
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-72 w-72 rounded-full object-cover object-top"
            src="./assets/heros/layla.jpg"
          />
          <h2>Layla - 2.77%</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-96 w-96 rounded-full object-cover object-top"
            src="./assets/heros/hanabi.jpg"
            alt="nature image"
          />
          <h2>Hanabi - 3.48%</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-72 w-72 rounded-full object-cover object-top"
            src="./assets/heros/franco.jpg"
          />
          <h2>Franco - 2.61%</h2>
        </div>
      </div>
    );
  },
};

export default TopRank;
