import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import AchieveCard from '../ui/AchieveCard';
import './css/AccountPage.css';
import Profilecard from './Profilecard';
import UserEditModal from '../ui/UserEditModal';

export default function AccPage(): JSX.Element {
  const achieves = useAppSelector((store) => store.achieves);
  console.log(achieves?.currentUserAchives);

  const getedAchievs = achieves?.currentUserAchives.map((el) => el.achivId);
  const user = useAppSelector((store) => store.authSlice.user);
  const profileData = {
    imgUrl:
      'https://oir.mobi/uploads/posts/2022-08/1661338443_5-oir-mobi-p-pustoi-fon-vkontakte-6.png',
    // name : 'Dinil',
    occupation: 'Front-end Developer',
    address: 'Lorem ipsum dolor',
    number: '111-222-3333',
    email: 'example@gmail.com',
  };

  return (
    <div className="accountContainer accountContainerCustom">
      <Profilecard
        profileImgUrl={profileData.imgUrl}
        profileName={user.status === 'authenticated' ? user.name : 'Неопозднанное нечто'}
        ProfileOccupation={profileData.occupation}
        ProfileAddress={profileData.address}
        ProfileNumber={profileData.number}
        ProfileEmail={user.status === 'authenticated' ? user.email : profileData.email}
      />{' '}
      {achieves.ahieves.map((achieve) => (
        <AchieveCard key={achieve.id} achieve={achieve} getedAchievs={getedAchievs} />
      ))}
      <UserEditModal/>
    </div>
  );
}
