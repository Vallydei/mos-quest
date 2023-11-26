import React from "react";
import RecipeReviewCard from "../ui/LocationsCard";
import "./LocationsPage.css"; // Import the CSS file for styling

export default function LocationsPage(): JSX.Element {
  return (
    <div className="locations-container">
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </div>
  );
}
