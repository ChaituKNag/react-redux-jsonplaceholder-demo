import React from "react";

import "./index.css";

export default props => {
  let usersList = props.list;
  return (
    usersList &&
    usersList.length > 0 && (
      <ul>
        {usersList.map((item, i) => (
          <li key={i} onClick={() => props.userClicked(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    )
  );
};
