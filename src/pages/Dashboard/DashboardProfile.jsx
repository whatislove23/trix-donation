import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileContext } from '../../hooks/useContext';
import { toast } from 'react-toastify';
import Title from '../../components/Title';
import recoverAccessToken from '../../functions/recoverAccessToken';

import BecomeVolunterForm from './BecomeVolunterForm';
import AddImage from '../../components/dashboard/AddImage';

export default function DashboardProfile() {
  const { profile, setProfile } = useContext(ProfileContext);

  const [userData, setUserData] = useState(null);
  const [profilePic, setProfilePic] = useState();
  const [isEditable, setEditable] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const updateProfile = async () => {
    const formData = new FormData();
    if (profilePic) formData.append('avatar', profilePic[0]);
    if (firstName) formData.append('name', firstName);
    if (secondName) formData.append('surname', secondName);
    console.log(profilePic[0]);
    fetch(`${import.meta.env.VITE_API_BASE}/users/api/edit/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${profile.access_token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.name) {
          toast.success('Профіль оновлено');
          setEditable(false);
        }
      });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/users/api/profile/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${profile?.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) setUserData(data);
        if (data?.messages?.length)
          return <Navigate to={recoverAccessToken(profile, setProfile)} replace />;
      });
  }, [profile, setProfile]);

  return (
    <div className='my-9 w-full rounded-2xl  md:border-2 md:border-bg-300 md:p-5 lg:my-0'>
      <div className='relative '>
        {(secondName || firstName || profilePic) && isEditable && (
          <svg
            onClick={updateProfile}
            className='bsolute left-0 top-0 cursor-pointer'
            stroke='#33333'
            fill='#33333'
            strokeWidth='0'
            viewBox='0 0 448 512'
            height='25px'
            width='25px'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z'></path>
          </svg>
        )}
        <svg
          className='absolute right-0 top-0 cursor-pointer'
          onClick={() => setEditable(!isEditable)}
          stroke='#33333'
          fill='#33333'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='25px'
          width='25px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'></path>
        </svg>
        <Title>Мій профіль</Title>
      </div>
      <div className=' mt-5 flex flex-col'>
        <div className=' flex  flex-col  items-center justify-center gap-4 md:flex-row md:justify-start lg:gap-9'>
          <AddImage
            className={`${isEditable && 'rounded-lg border-2 border-accent-100'}`}
            image={profilePic}
            setImage={setProfilePic}
            url={userData?.avatar}
            isEditable={isEditable}
          />

          <div className='relative mt-4 flex flex-col gap-4'>
            <div className='flex w-full flex-wrap gap-1 lg:w-full'>
              <input
                className='w-full    max-w-56 rounded-lg border-2 border-accent-200 bg-transparent p-1 text-2xl font-semibold text-text-100 placeholder:text-text-100 disabled:border-0'
                value={firstName}
                disabled={!isEditable}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={userData?.name || 'Імʼя'}
              />
              <input
                className='w-full max-w-56 rounded-lg border-2 border-accent-200 bg-transparent p-1 text-2xl font-semibold text-text-100 placeholder:text-text-100 disabled:border-0 '
                value={secondName}
                disabled={!isEditable}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder={userData?.surname || 'Прізвище'}
              />
            </div>

            <p className='text-xl font-semibold text-text-200'>
              Пошта: <span className='text-text-100'>{userData?.email}</span>
            </p>
            <p className='text-xl font-semibold text-text-200'>
              Роль: <span className='text-text-100'>Користувач</span>
            </p>
            <p className='text-xl font-semibold text-text-200'>
              Дата рєєстрації:{' '}
              <span className='text-text-100'>
                {userData && new Date(userData.registration_date).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
        <div className='mt-10 flex flex-col '>
          <Title>Отримати статус волонтера</Title>
          <BecomeVolunterForm />
        </div>
      </div>
    </div>
  );
}
