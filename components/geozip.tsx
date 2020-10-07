import React from "react";
import geo2zip from 'geo2zip';
import { Ip } from './ip'
 
const Zip = () =>{
  Ip();
  const a = 51.3233379650232
  const b = -0.481747846041145
  const x = 34.659698
  const y = -88.242903
  const red = "CU"
  if(red=="CU"){
    console.log("work")
    console.log(red)
  }
  const location = {
    latitude: a,
    longitude: b
  };

  const closestZip =  geo2zip(location);
  closestZip.then((value) =>{
     console.log(value[0])
  });
  
  return(
    <div>
      <h1>Casa</h1>
    </div>
  )

};
export default Zip;

 

 

