import Button from '../Button';
import Progress from '../Progress';

export default function CollectionSliderItem(props) {
  const {
    id,
    preview,
    description,
    goal_title,
    goal_amount,
    collected_amount_on_jar,
    collected_amount_on_platform,
    collected_amount_from_other_requisites,
  } = props;
  const sum = Math.floor(
    Math.abs(collected_amount_from_other_requisites) +
      Math.abs(collected_amount_on_jar) +
      Math.abs(collected_amount_on_platform),
  );
  return (
    <div
      className='h-full w-full bg-cover bg-center backdrop-blur-sm   '
      style={{ backgroundImage: `url('${preview}')` }}
    >
      <div className='flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm'>
        <div className='mx-auto w-full max-w-screen-xl'>
          <div className='felx flex-col gap-2'>
            <h1 className='font line-clamp-2 truncate text-2xl font-extrabold uppercase text-white  sm:text-[40px]'>
              {goal_title}
            </h1>
            <p className='line-clamp-2  text-white sm:text-2xl'>{description}</p>
          </div>
          <div className='mt-6 flex flex-col sm:max-w-xl'>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold text-white'>₴{sum}</p>
              <p className='text-xl font-semibold text-white'>
                ₴{Math.round(Math.abs(goal_amount))}
              </p>
            </div>
            <Progress complelted={(sum / Math.abs(goal_amount)) * 100} />
          </div>
          <Button className='mt-6 w-full max-w-64 sm:max-w-72' to={`/collections/${id}`}>
            Підтримати
          </Button>
        </div>
      </div>
    </div>
  );
}
