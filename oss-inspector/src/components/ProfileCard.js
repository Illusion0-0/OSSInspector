import React from "react";
import { useLogout } from "../hooks/useLogout";

const ProfileCard = ({ user }) => {
  const { logout } = useLogout();
  return (
    <>
      console.log(user);
      <div className="profile-card">
        <img className="profile-img" src={user.photoURL} alt="" />
        <p>
          Name: <span>{user.displayName}</span>
        </p>
        <p>
          Username: <span>{user.reloadUserInfo.screenName}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          User ID: <span>{user.uid}</span>
        </p>
      </div>
      <button className="btny" onClick={logout}>
        Log Out
      </button>
    </>
  );
};

export default ProfileCard;