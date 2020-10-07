import React from "react";
import usZips from 'us-zips';
 
const Zip = () =>{
  const num = 38873
  const number = `${num}`;
  console.log(number)
  const x =  usZips[`${num}`];
  //console.log(x.latitude);
   console.log(x);
  
  
  return(
    <div>
      <h1>Casa</h1>
    </div>
  )

};
export default Zip;

 

 

