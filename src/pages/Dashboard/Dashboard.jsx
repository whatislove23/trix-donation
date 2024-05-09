import { Outlet } from 'react-router-dom';
import NavBtn from '../../components/dashboard/NavBtn';

export default function Dashboard() {
  return (
    <div className='mt-10 px-4'>
      <nav className='flex  flex-wrap gap-3'>
        <NavBtn to='/dashboard'>Профіль</NavBtn>
        <NavBtn to='/dashboard/organisation'>Організація</NavBtn>
        <NavBtn to='/dashboard/follows'>Підписки</NavBtn>
      </nav>
      <Outlet />
    </div>
  );
}
