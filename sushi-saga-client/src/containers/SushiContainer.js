import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import SuShi from "../components/Sushi";

const SushiContainer = props => {
  const { sushisToRender, sushiPage, handleMoreSushi, handleEatSushi } = props;

  const pageSize = 4;
  const startIndex = sushiPage * pageSize;
  const endIndex = startIndex + pageSize;
  // console.log(JSON.stringify({ sushiPage, pageSize, startIndex, endIndex }));

  return (
    <Fragment>
      <div className="belt">
        {sushisToRender.slice(startIndex, endIndex).map(sushi => {
          return <SuShi sushi={sushi} handleEatSushi={handleEatSushi} />;
        })}
        <MoreButton handleMoreSushi={handleMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
