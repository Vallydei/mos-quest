import React from 'react';
import RecipeReviewCard from '../ui/LocationsCard';
import './LocationsPage.css'; // Import the CSS file for styling

export default function LocationsPage(): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {locations?.map((location) => <RecipeReviewCard key={location?.id} location={location} />)}
      {/* <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard /> */}
    </div>
  );
}
