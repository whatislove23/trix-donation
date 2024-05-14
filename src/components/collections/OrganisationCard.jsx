import Button from '../Button';
import { Link } from 'react-router-dom';

export default function OrganisationCard({ avatar, name, organization_id }) {
  return (
    <Link to={`/organisation/${organization_id}`}>
      <div className='w-full overflow-hidden rounded-2xl border-2 border-bg-300 '>
        <div
          className='  aspect-video h-44 w-full overflow-hidden bg-cover bg-center'
          style={{ backgroundImage: `url('${avatar}')` }}
        ></div>
        <div className='mt-2 flex flex-col items-center gap-2 px-4 pb-4'>
          <h3 className=' line-clamp-1 text-xl font-semibold text-text-100'>{name}</h3>
          <Button className=' h-9 w-full px-6 py-2  font-medium  lg:max-w-min'>Переглянути</Button>
        </div>
      </div>
    </Link>
  );
}
