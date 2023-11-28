import React, { useState } from 'react';
import type { AchieveType } from '../../types/locationType/achievesType';

import '../pages/css/test.css';


type AchieveCardProps = {
  achieve: AchieveType;
  getedAchievs: number[];
};

export default function AchieveCard({ achieve, getedAchievs }: AchieveCardProps): JSX.Element {
  return (
    <div className={`${
      (getedAchievs.includes(achieve.id)) ? 'getedAchiev' : 'achieveContainer'
    }`}>
      <img
        className={`achieveImg ${
          (getedAchievs.includes(achieve.id)) ? 'achieveImg' : 'disabledImg'
        }`}
        src={achieve.img}
        alt="достижение"
      />
      <p>{achieve.description}</p>
    </div>
  );
}  
