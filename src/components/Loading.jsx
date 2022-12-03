import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <ScaleLoader
        color="#489742"
        height={120}
        width={10}
        radius={50}
        margin={5}
      />
    </div>
  );
};

export default Loading;
