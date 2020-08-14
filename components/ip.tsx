import React from 'react';
import { useIpCoords } from 'use-ipcoords'
 
 
 export const Ip = () => {
    const {
        latitudeIp,
        longitudeIp 
    } = useIpCoords();
 
    return (
        <div>
            latitudeIp : {latitudeIp}<br />
            longitudeIp : {longitudeIp}<br />
        </div>
    );
 
};
