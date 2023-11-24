import React from "react";
import RecipeReviewCard from "../ui/LocationsCard";


export default function LocationsPage(): JSX.Element {
    return (

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
    );
  }