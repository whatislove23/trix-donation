import Button from './Button';
import { Link } from 'react-router-dom';
import Progress from './Progress';

export default function CollectionCard(props) {
  const {
    id,
    preview,
    description,
    goal_title,
    goal_amount,
    isProfile,
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
    <Link to={`/collections/${id}`}>
      <div
        className={`flex h-full w-full  flex-col justify-between  gap-2 overflow-hidden rounded-2xl border-2 border-bg-300  p-4 md:max-w-full md:gap-4  lg:max-w-[400px]  lg:gap-5   ${isProfile ? 'rounded-2xl p-2' : ' lg:rounded-[38px] lg:p-7'}`}>
        <div
          className={` ${!isProfile ? 'h-32  lg:h-[300px]' : 'h-48'}   w-full overflow-hidden rounded-lg bg-cover bg-center`}
          style={{ backgroundImage: `url('${preview}')` }}></div>
        <div className='flex flex-col gap-2'>
          <h3 className='line-clamp-2 text-xl   font-semibold text-text-100  md:line-clamp-2 lg:text-2xl'>
            {goal_title}
          </h3>
          <p
            className={`line-clamp-3  ${isProfile ? 'sm:hidden' : 'sm:block'}  hidden h-[70px] text-base  font-semibold text-text-200  `}>
            {description}
          </p>
        </div>
        <div className={``}>
          <div className='flex flex-col gap-2'>
            <div className='flex  items-center justify-between overflow-hidden'>
              <p className='font-semibold text-text-100 '>₴{sum}</p>
              <p className='font-semibold text-text-200 '> ₴{Math.round(Math.abs(goal_amount))}</p>
            </div>
            <Progress complelted={(sum / Math.abs(goal_amount)) * 100} />
          </div>
        </div>
        <Button
          className={` h-9 w-full px-6 py-2  font-medium   ${isProfile ? '' : 'lg:max-w-min'}`}>
          Підтримати
        </Button>
      </div>
    </Link>
  );
}
