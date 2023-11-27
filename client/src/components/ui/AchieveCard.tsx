import React, { useState } from 'react';

type AchieveCardProps = {
  achieve: string;
};

export default function AchieveCard({ achieve }: AchieveCardProps): JSX.Element {
const [achieveStatus, setAchieveStatus] = useState('disabledImg')

  return (
    <div className="achieveContainer">
      <img className={`achieveImg ${achieveStatus}`} src={achieve} alt="достижение" />
      <p>AchieveCard</p>
    </div>
  );
}
