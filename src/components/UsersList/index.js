import React from "react";
import {Link} from 'react-router-dom';

import "./index.css";

export default props => {
  let usersList = props.list;
  return (
    <div>
      {
        usersList &&
        usersList.length > 0 && (
          <ul>
            {usersList.map((item, i) => (
              <li key={i} onClick={() => props.userClicked(item)}>
                <Link to="/user">{item.name}</Link>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
