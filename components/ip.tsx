import React from 'react';
import { IpCoords } from './IpCoords'
 
 
 export const Ip = () => {
    console.log("funciona")
    const {
        latitudeIp,
        longitudeIp,
        countryCode 
    } = IpCoords();

    
        
    
 
    return (
        <div>
            latitudeIp : {latitudeIp}<br />
            longitudeIp : {longitudeIp}<br />
            countryCode : {countryCode}<br />
        </div>
    );
 
};
