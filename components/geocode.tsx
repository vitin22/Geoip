import React from "react";
import Geocode from "react-geocode";
 

const App = () =>{
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDCGSAjlNq1PKSha5-Rp63KCX7vZtbElTQ");
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// Get address from latidude & longitude.
Geocode.fromLatLng("48.8583701", "2.2922926").then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  error => {
    console.log("sopa")
    console.error(error);
  }
);
 
// Get latidude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);
console.log("casa")
return(
  <div>
    <h1>Casa</h1>
  </div>
)
};
 
export default App;
