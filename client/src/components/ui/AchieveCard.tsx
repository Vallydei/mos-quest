import React from 'react';
import Tooltip from '@mui/material/Tooltip';
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

  /* const longText = `
   Здесь должно быть описание за что можно получить эту награду
  `;/////////// */

  return (
    <CustomWidthTooltip className='windowAchieve' title={achieve.longText}>
      <div className={`${getedAchievs.includes(achieve.id) ? 'getedAchiev' : 'achieveContainer'}`}>
        <img
          className={`achieveImg ${
            getedAchievs.includes(achieve.id) ? 'achieveImg' : 'disabledImg'
          }`}
          src={achieve.img}
          alt="достижение"
        />
        <p className='text'>{achieve.description}</p>
      </div>
    </CustomWidthTooltip>
  );
}
