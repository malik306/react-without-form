import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Service() {
  //selecting the reducer function
  const ownState = useSelector((state) => state.ChangeNumber);

  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0.5em 0" }}>
      <button onClick={() => dispatch({ type: "Inc" })}>Dec</button>
      <span style={{ padding: "0 0.5em" }}>{ownState}</span>
      <button onClick={() => dispatch({ type: "Dec" })}>Inc</button>
    </div>
  );
}
export default Service;
