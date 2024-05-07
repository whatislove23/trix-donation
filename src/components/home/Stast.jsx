import useScreenWidth from '../../hooks/useScreenWidth';
import StatsItem from './StatsItem';
export default function Stast() {
  let screenWidth = useScreenWidth();
  let fontSize = screenWidth < 375 ? 12 : screenWidth <= 768 ? 20 : screenWidth <= 1024 ? 40 : 48;
  return (
    <div
      id='stats'
      className='flex h-20 items-center bg-gradient-to-r from-primary-100 to-accent-200 md:h-44'
    >
      <div className='mx-auto flex w-full max-w-screen-xl justify-between px-4'>
        <StatsItem description={'Верифікованих волонтерів'} fontSize={fontSize} number={200} />
        <StatsItem description={'Відкритіх зборів'} fontSize={fontSize} number={250} />
        <StatsItem description={' Завершених зборів'} fontSize={fontSize} number={230} />
        <StatsItem description={'Гривень зібрано'} fontSize={fontSize} number={200000} />
      </div>
    </div>
  );
}
