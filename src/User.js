import React from "react";
import { useEffect } from "react";

function User(props) {
  useEffect(() => {
    alert("cliked" + props.data);
  }, [props.data]);
  useEffect(() => {
    console.log("clicked" + props.data1);
  }, [props.data1]);
  return (
    <div>
      <h1>{props.data}</h1>
      <h1>{props.data1}</h1>
    </div>
  );
}

export default User;
