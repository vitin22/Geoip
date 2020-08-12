import React from "react";
import useGeolocation from "react-navigator-geolocation";
 
const App: React.FC = () => {
  const { isEnabled, coords } = useGeolocation();
 
  return isEnabled ? (
    <h3>{ coords?.latitude + ', ' + coords?.longitude }</h3>
  ) : (
    <h4>Location permission is not enabled</h4>
  )
};
 
export default App;
