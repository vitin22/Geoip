import React from "react";
import useGeolocation from "react-navigator-geolocation";
 
const App: React.FC = () => {
  const { isAvailable, isEnabled, coords, suppressRequest } = useGeolocation({ suppressOnMount: true });
 
  return isAvailable ? (
    isEnabled ? (
      <div>
        <h1>Coordinates granted</h1>
        <h2>{coords?.latitude + ', ' + coords?.longitude}</h2>
      </div>
    ) : isEnabled === false ? (
      <h1>Location permission disabled</h1>
    ) : (
      <button type="button" onClick={() => suppressRequest(false)}>
        disable suppression
      </button>
    )
  ) : (
    <h1>Your browser doesn't support Geolocation API</h1>
  );
};
 
export default App;
