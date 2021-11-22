import React from "react";
import dayjs from "dayjs";

function Dates() {
  return <p> {dayjs().format("DD MMMM, dddd")} </p>;
}

export default Dates;