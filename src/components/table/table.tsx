import React from "react";

import "./table.css";
import { Schedule } from "../../types";

function Table(props: Props) {
  const { data } = props;

  return (
    <div className="table">
      {Object.keys(data)
        .map(parseFloat)
        .sort((a, b) => a - b)
        .map((time, index) => (
          <h1>
            {index} {time}
          </h1>
        ))}
    </div>
  );
}

type Props = {
  data: Schedule;
};

export default Table;
