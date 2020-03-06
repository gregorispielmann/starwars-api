import React from "react";

import BarLoader from "react-spinners/BarLoader";

export default function Loading() {
  return (
    <BarLoader
      size={25}
      //size={"150px"} this also works
      color={"#123abc"}
    />
  );
}
