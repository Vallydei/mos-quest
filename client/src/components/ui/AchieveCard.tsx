import React, { useState } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import type { AchieveType } from '../../types/locationType/achievesType';
import '../pages/css/test.css';


type AchieveCardProps = {
  achieve: AchieveType;
  getedAchievs: number[];
};



export default function AchieveCard({ achieve, getedAchievs }: AchieveCardProps): JSX.Element {

  const CustomWidthTooltip = styled(Tooltip)({
    maxWidth: 500,
    '& .MuiTooltip-tooltip': {
      fontSize: '16px',
      backgroundColor: '#F0F0F0',
      
    },
  });

  const longText = `
   Здесь должно быть описание за что можно получить эту награду
  `;
 
  return (
    <div className={`${
      (getedAchievs.includes(achieve.id)) ? 'getedAchiev' : 'achieveContainer'
    }`}>
    
    <CustomWidthTooltip title={longText}>
        <p>{achieve.description}</p>
      </CustomWidthTooltip>
      <img
        className={`achieveImg ${
          (getedAchievs.includes(achieve.id)) ? 'achieveImg' : 'disabledImg'
        }`}
        src={achieve.img}
        alt="достижение"
      />
     
    </div>
  );
}  
