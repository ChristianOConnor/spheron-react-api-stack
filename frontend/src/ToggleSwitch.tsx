import React, { Dispatch, SetStateAction } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ toggledVal, setToggled } : { toggledVal: boolean, setToggled: Dispatch<SetStateAction<boolean>> }) {
  const onToggle = () => setToggled(!toggledVal);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggledVal} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;