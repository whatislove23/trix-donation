import Button from '../Button';

export default function OrganisationCard() {
  return (
    <div className='w-full overflow-hidden rounded-2xl border-2 border-bg-300'>
      <div className='h-44 w-full object-cover'>
        <img
          src='https://www.ua-region.com.ua/firms/logo/43720363.jpg?ver=1652686790'
          alt=''
          className='h-full w-full'
        />
      </div>
      <div className='mt-2 flex flex-col items-center gap-2 px-4 pb-4'>
        <h3 className=' text-xl font-semibold text-text-100 '>Serhiy Prytula Foundation</h3>
        <Button className=' h-9 w-full px-6 py-2  font-medium  lg:max-w-min'>Переглянути</Button>
      </div>
    </div>
  );
}
