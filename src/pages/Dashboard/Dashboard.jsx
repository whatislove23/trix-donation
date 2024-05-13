import { Navigate, Outlet } from 'react-router-dom';
import NavBtn from '../../components/dashboard/NavBtn';
import { ProfileContext } from '../../hooks/useContext';
import { useContext, useEffect } from 'react';

export default function Dashboard() {
  const { profile } = useContext(ProfileContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  if (!profile.access_token) {
    return <Navigate to='/auth' replace />;
  }
  return (
    <div className='mx-auto mt-10 flex w-full max-w-screen-xl  flex-col  px-4 lg:my-10 lg:flex-row lg:gap-8'>
      <nav className='flex flex-wrap  gap-3 md:flex-col md:flex-nowrap lg:rounded-2xl lg:border-2 lg:border-bg-300 lg:p-5'>
        <NavBtn to='/dashboard/profile'>Профіль</NavBtn>
        <NavBtn to='/dashboard/organisation'>Організація</NavBtn>
        <NavBtn to='/dashboard/follows'>Підписки</NavBtn>
      </nav>

      <Outlet />
    </div>
  );
}
