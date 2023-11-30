import React, { useEffect } from 'react';
import LocationCard from '../ui/LocationsCard';
import './css/LocationsPage.css'; // Import the CSS file for styling
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import StaggeredDropDown from '../ui/StaggeredDropdown';
import { setSelectedLocations } from '../../redux/slices/locations/locationSlices';

export default function LocationsPage(): JSX.Element {
  const selctedLocations = useAppSelector((store) => store.locationsSlice.selectedLocations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedLocations(4));
  }, []);

  return (
    <>
      <div className="drop-down">
        <StaggeredDropDown />
      </div>
      <div className="locations-container">
        {selctedLocations?.map((location) => (
          <LocationCard key={location?.id} location={location} />
        ))}
      </div>
    </>
  );
}
