import React from 'react';
import LocationCard from '../ui/LocationsCard';
import './css/LocationsPage.css'; // Import the CSS file for styling
import { useAppSelector } from '../../redux/hooks';

export default function LocationsPage(): JSX.Element {
  const locations = useAppSelector((store) => store.locationsSlice.locations);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {locations?.map((location) => <LocationCard key={location?.id} location={location} />)}
    </div>
  );
}
