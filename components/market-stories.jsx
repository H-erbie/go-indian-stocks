import React from "react";
import marketStoriesData from "@/dummyData/market-stories";
import MarketStoryCard from "./market-story-card";
const MarketStories = ({ activeTab }) => {
  const marketStories = marketStoriesData;
  return (
    <section
      className={
        activeTab === "market stories"
          ? " sm:pr-10 block sm:mx-auto lg:mx-0 w-full mx-0 sm:w-3/4 lg:w-[25%]"
          : "hidden lg:block w-3/4 mx-auto lg:mx-0 lg:w-[25%] pr-10"
      }
    >
      <h2 className="bg-gray-100 hidden lg:block  font-bold mb-8 text-lg uppercase w-max p-2 text-red-400">
        Market Stories
      </h2>

      <div>
        {marketStories.map((forum) => {
          const { id, thumbnail, desc, headline } = forum;
          return (
            <MarketStoryCard
              key={id}
              id={id}
              headline={headline}
              thumbnail={thumbnail}
              description={desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MarketStories;
