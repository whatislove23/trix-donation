import Button from './Button';
import Progress from './Progress';

export default function CollectionCard(props) {
  const { title, description, collected, goal } = props;
  return (
    <div className='flex  w-full flex-col gap-2 rounded-2xl border-2 border-bg-300  p-4 md:max-w-full md:gap-4  lg:max-w-[400px]  lg:gap-5 lg:rounded-[38px] lg:p-7'>
      <div className='h-32  w-full overflow-hidden rounded-lg object-cover lg:h-[300px]'>
        <img
          className='h-full w-full'
          src='https://suprotyv.com/wp-content/uploads/2023/02/DJI-Mavic-3.jpg'
          alt=''
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='line-clamp-4 h-[118px] text-xl font-semibold text-text-100 lg:h-[120px] lg:text-2xl'>
          {title}
        </h3>
        <p className='line-clamp-3 hidden h-[70px] text-base  font-semibold text-text-200 sm:block '>
          {description}
        </p>
      </div>
      <div className='hidden md:block'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-text-100 '>₴{collected}</p>
            <p className='font-semibold text-text-200 '> ₴{goal}</p>
          </div>
          <Progress complelted={(collected / goal) * 100} />
        </div>
      </div>
      <Button className=' h-9 w-full px-6 py-2  font-medium  lg:max-w-min' to={'/collections/1'}>
        Підтримати
      </Button>
    </div>
  );
}
