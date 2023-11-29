import React from 'react';
import LocationCard from '../ui/LocationsCard';
import './css/LocationsPage.css'; // Import the CSS file for styling
import { useAppSelector } from '../../redux/hooks';

export default function LocationsPage(): JSX.Element {
  const locations = useAppSelector((store) => store.locationsSlice.locations);
  return (
    <div className='locations-container'>
      {locations?.map((location) => <LocationCard key={location?.id} location={location} />)}
    </div>
  );
}
