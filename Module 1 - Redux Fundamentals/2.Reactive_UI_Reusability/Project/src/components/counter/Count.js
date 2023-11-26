import React from "react";

const Count = ({ totalCount }) => {
  return (
    <div>
      <p>Your total Count: {totalCount()}</p>
    </div>
  );
};

export default Count;
