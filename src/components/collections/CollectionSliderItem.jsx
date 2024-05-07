import Progress from '../Progress';
import Button from '../Button';

export default function CollectionSliderItem({ img, title, description, collected, goal }) {
  return (
    <div
      className='h-full w-full bg-cover bg-center backdrop-blur-sm   '
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className='flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm'>
        <div className='mx-auto w-full max-w-screen-xl'>
          <div className='felx flex-col gap-2'>
            <h1 className='font line-clamp-2 truncate text-2xl font-extrabold uppercase text-white  sm:text-[40px]'>
              {title}
            </h1>
            <p className='line-clamp-2  text-white sm:text-2xl'>{description}</p>
          </div>
          <div className='mt-6 flex flex-col sm:max-w-xl'>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold text-white'>₴{collected}</p>
              <p className='text-xl font-semibold text-white'>₴{goal}</p>
            </div>
            <Progress complelted={(collected / goal) * 100} />
          </div>
          <Button className='mt-6 w-full max-w-64 sm:max-w-72'>Підтримати</Button>
        </div>
      </div>
    </div>
  );
}
