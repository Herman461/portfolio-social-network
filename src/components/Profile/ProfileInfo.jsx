import React from 'react';
import ava from '../../assets/img/ava.jpg';

const ProfileInfo = (props) => {
   return (
      <div className="profile__info info-profile">
         <div className="info-profile__column">
            <div className="info-profile__ava">
               <img src={ava} />
            </div>
         </div>
         <div className="info-profile__column">
            <div className="info-profile__name">{props.profile ? props.profile.name : "My Profile"} ({props.profile ? props.profile._id : "Any id"})</div>
            <div className="info-profile__status">{props.profile ? props.profile.status : "status"}</div>
         </div>
      </div>
   );
};

export default ProfileInfo;
