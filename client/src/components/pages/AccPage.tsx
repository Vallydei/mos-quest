import React from 'react';
import { Container } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import AchieveCard from '../ui/AchieveCard';
import './css/AccountPage.css';

export default function AccPage(): JSX.Element {
  const achieves = useAppSelector((store) => store.achieves);
  console.log(achieves);

  return (
    <div className='accountContainer'>
      {' '}
      {achieves.ahieves.map((achieve) => (
        <AchieveCard key={achieve.id} achieve={achieve.img} />
      ))}
    </div>
  );
}
