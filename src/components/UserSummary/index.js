import React from "react";
export default props => (
  props.user && (<div>
    <h2>{props.user.name}</h2>
    <span>
      <strong>{props.user.username}</strong> |
      <a target="_blank" href={"//" + props.user.website}>
        {props.user.website}
      </a>{" "}
      |<em>{props.user.phone}</em>
    </span>
  </div>)
);
