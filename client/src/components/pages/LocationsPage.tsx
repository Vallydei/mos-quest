import React from 'react';
import RecipeReviewCard from '../ui/RecipeReviewCard';
import { useAppSelector } from '../../redux/hooks';

export default function LocationsPage(): JSX.Element {

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      <RecipeReviewCard
        image="https://chebureky.ru/assets/images/interior/volokolamskoe/12.jpg"
        text="Локация 1"
      />
      <RecipeReviewCard
        image="https://thumb.tildacdn.com/tild3661-3561-4836-b335-633566343830/-/resize/960x/-/format/webp/shutterstock_7453339.jpg"
        text="Локация 2"
      />
      <RecipeReviewCard
        image="https://thumb.tildacdn.com/tild3661-3561-4836-b335-633566343830/-/resize/960x/-/format/webp/shutterstock_7453339.jpg"
        text="Локация 3"
      />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </div>
  );
}
