export default function LazyOrganizationCard() {
  return (
    <div className='w-full overflow-hidden rounded-2xl border-2 border-bg-300 '>
      <div className='  aspect-video h-44 w-full overflow-hidden bg-logobg bg-cover bg-center'></div>
      <div className='mt-2 flex flex-col items-center gap-2 px-4 pb-4'>
        <div className=' h-4 w-full rounded-2xl bg-bg-300 text-xl font-semibold text-text-100'></div>
        <div className=' h-9 w-full rounded-2xl  bg-bg-300 px-6  py-2 font-medium lg:max-w-min lg:px-20'></div>
      </div>
    </div>
  );
}
