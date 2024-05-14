import Progress from '../Progress';

export default function LazyCollectionItem({ isProfile = false }) {
  return (
    <div
      className={`flex h-full w-full flex-col  justify-between gap-2  overflow-hidden rounded-2xl border-2 border-bg-300   p-4 md:max-w-full md:gap-4  lg:max-w-[400px]  lg:gap-5   ${isProfile ? 'rounded-2xl p-2' : ' lg:rounded-[38px] lg:p-7'}`}
    >
      <div
        className={` ${!isProfile ? 'h-32  lg:h-[300px]' : 'h-48'}   w-full overflow-hidden rounded-lg bg-logobg bg-cover bg-center`}
      ></div>
      <div className='flex flex-col gap-2'>
        <h3 className='line-clamp-2 text-xl   font-semibold text-text-100  md:line-clamp-2 lg:text-2xl'></h3>
        <p
          className={`line-clamp-3  ${isProfile ? 'sm:hidden' : 'sm:block'}  hidden h-[70px] rounded-2xl  bg-bg-300 text-base  font-semibold text-text-200`}
        ></p>
      </div>
      <div className={``}>
        <div className='flex flex-col gap-2'>
          <div className='flex  items-center justify-between overflow-hidden'>
            <p className='block h-4 w-10 rounded-2xl bg-bg-300 font-semibold text-text-100'></p>
            <p className='block h-4 w-10 rounded-2xl bg-bg-300 font-semibold text-text-200'></p>
          </div>
          <Progress complelted={0} />
        </div>
      </div>
      <div
        className={`h-9 w-full rounded-2xl bg-bg-300  px-6 py-2 font-medium sm:px-20  ${isProfile ? '' : 'lg:max-w-min'}`}
      ></div>
    </div>
  );
}
