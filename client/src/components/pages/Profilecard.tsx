import React from 'react';
import { FaGears, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import './css/Profilecard.scss';
import { useAppDispatch } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/auth';

function Profilecard({
  profileImgUrl,
  profileName,
  ProfileOccupation,
  ProfileNumber,
  ProfileEmail,
}): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Tilt className="card">
      <div className="card-top">
        <div className="card-top__profile-img">
          <img src={profileImgUrl} alt="" />
          <h2>
            {' '}
            <FaGears onClick={() => dispatch(toggleModal())} />
          </h2>
        </div>

        <div className="card-top__profile-content">
          <h2 className="profile-name">{profileName}</h2>
          <h4 className="profile-occupation">{ProfileOccupation}</h4>
          <div className="profile-info">
            <div className="profile-number">
              <FaPhone />
              <span>{ProfileNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="divider" />
        <p className="profile-email">{ProfileEmail}</p>
      </div>
    </Tilt>
  );
}

export default Profilecard;

//onClick={() => dispatch(toggleModal())
