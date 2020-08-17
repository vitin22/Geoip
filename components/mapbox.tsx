import React from 'react';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoidml0aW4yMiIsImEiOiJja2R5cjRxM3YzZ2dtMnpxcXltcmNhZ21jIn0.YriEgQ-ZxlXeAUP1KP2oow'
});

const Mapbox = () => {
return (
<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>
)
}

export default Mapbox;