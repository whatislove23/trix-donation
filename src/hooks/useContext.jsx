import { createContext, useState } from 'react';

const ProfileContext = createContext();

let user = JSON.parse(localStorage.getItem('profile'));

if (!user) {
  localStorage.setItem('profile', JSON.stringify({}));
  user = JSON.parse(localStorage.getItem('profile'));
}

const ProfileProvider = ({ children }) => {
  const [profile, setProvider] = useState(user);

  const setProfile = (data) => {
    localStorage.setItem('profile', JSON.stringify(data));
    setProvider(data);
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>{children}</ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };
