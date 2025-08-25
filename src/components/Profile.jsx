import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-accent-1 mb-6 text-center">Profile</h2>
        <p className="text-text-secondary text-center">This is your profile page. (Protected)</p>
      </div>
    </div>
  );
};

export default Profile;
