import React, { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../helpers/data-types";
import { getGameFeature } from "../../../helpers/player";
import GamesCard from "../../container/GamesCard/GamesCard";

const Games = () => {
  const [gameList, setGameList] = useState([]);

  const getGameList = useCallback(async () => {
    const data = await getGameFeature();
    console.log(data);
    setGameList(data.data);
  }, [getGameFeature]);

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GamesCard
              key={item._id}
              id={item._id}
              title={item.name}
              category={item?.category?.name}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
