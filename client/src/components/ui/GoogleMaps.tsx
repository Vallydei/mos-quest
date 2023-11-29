import React from 'react';

type GoogleMapsProps = {
  map: string;
};

function GoogleMaps({ map }: GoogleMapsProps): JSX.Element {
  return (
    <iframe
      className="mapContainer"
      src={map}
      style={{ border: '0' }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
}

export default GoogleMaps;
