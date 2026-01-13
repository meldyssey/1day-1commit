import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <h1>ToggleSwitch : {isOn ? "ON" : "OFF"}</h1>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "OFF" : "ON"}</button>
    </div>
  );
}
