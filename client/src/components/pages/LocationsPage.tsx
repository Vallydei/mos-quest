import React from 'react';
import RecipeReviewCard from '../ui/LocationsCard';
import './css/LocationsPage.css'; // Import the CSS file for styling
import { useAppSelector } from '../../redux/hooks';

export default function LocationsPage(): JSX.Element {
  const locations = useAppSelector((store) => store.locationsSlice.locations);
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.5s ease-in' }}>
      {locations?.map((location) => <RecipeReviewCard key={location?.id} location={location} />)}
    </div>
  );
}
