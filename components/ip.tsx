import React from 'react';
import { useIpCoords } from 'use-ipcoords'
 
 
 export const Ip = () => {
    console.log("funciona")
    const {
        latitudeIp,
        longitudeIp,
        countryCode 
    } = useIpCoords();

    
        
    
 
    return (
        <div>
            latitudeIp : {latitudeIp}<br />
            longitudeIp : {longitudeIp}<br />
            countryCode : {countryCode}<br />
        </div>
    );
 
};
