import React from "react";
import geo2zip from 'geo2zip';
 
const Zip = () =>{
  const location = {
    latitude: 34.659698,
    longitude: -88.242903
  };

  const closestZip =  geo2zip(location);
  console.log(closestZip);
  
  return(
    <div>
      <h1>Casa</h1>
    </div>
  )

};
export default Zip;

 

 

