import React, { Fragment } from "react";

const Table = props => {
  const { platesToDisplay, balance } = props;

  const renderPlates = plates => {
    return plates.map((_, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${balance} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(platesToDisplay)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
