import React, { useRef, useEffect, useState } from 'react';
import { useIpCoords } from 'use-ipcoords'
import usZips from 'us-zips'
import geo2zip from 'geo2zip'

import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './Map.css';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoidml0aW4yMiIsImEiOiJja2R5cjRxM3YzZ2dtMnpxcXltcmNhZ21jIn0.YriEgQ-ZxlXeAUP1KP2oow';
 
const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;