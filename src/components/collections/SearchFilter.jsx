import Select from 'react-select';
import useScreenWidth from '../../hooks/useScreenWidth';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#cccccc',
    color: '#cccccc',
    borderWidth: '2px',
    borderRadius: '20px',
    width: '100%',
    padding: '12px 16px',
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: '500',
  }),
  menu: (provided) => ({
    ...provided,
    background: '',
    width: '100%',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ffa500' : 'transparent',
  }),
};
const options = [
  { value: 'created_at', label: 'Найстаріші' },
  { value: '-created_at', label: 'Найновіші' },
  { value: '-goal_amount', label: 'Найменша мета' },
  { value: 'goal_amount', label: 'Найбільша мета' },
];
export default function SearchFilter({ setSearch, setSort }) {
  const screenWidth = useScreenWidth();
  return (
    <div className='mt-9 grid grid-cols-1  items-stretch gap-5 sm:mt-10  sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-9'>
      <div className='flex h-[70px] items-center  rounded-2xl  border-2 border-bg-300 px-4 py-3'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder={'Я шукаю...'}
          className='w-full  font-medium uppercase text-text-100 outline-none placeholder:text-xl placeholder:font-medium placeholder:uppercase placeholder:text-bg-300'
        />
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M26.7592 24.6908L21.2461 19.1777C22.5734 17.4108 23.2899 15.26 23.2875 13.05C23.2875 7.40508 18.6949 2.8125 13.05 2.8125C7.40508 2.8125 2.8125 7.40508 2.8125 13.05C2.8125 18.6949 7.40508 23.2875 13.05 23.2875C15.26 23.2899 17.4108 22.5734 19.1777 21.2461L24.6908 26.7592C24.9699 27.0086 25.3339 27.1418 25.708 27.1313C26.0822 27.1209 26.4382 26.9676 26.7029 26.7029C26.9676 26.4382 27.1209 26.0822 27.1313 25.708C27.1418 25.3339 27.0086 24.9699 26.7592 24.6908ZM5.7375 13.05C5.7375 11.6037 6.16637 10.1899 6.96988 8.98739C7.77339 7.78486 8.91544 6.8476 10.2516 6.29413C11.5878 5.74067 13.0581 5.59585 14.4766 5.87801C15.8951 6.16016 17.198 6.85661 18.2207 7.87928C19.2434 8.90195 19.9398 10.2049 20.222 11.6234C20.5041 13.0419 20.3593 14.5122 19.8059 15.8484C19.2524 17.1846 18.3151 18.3266 17.1126 19.1301C15.9101 19.9336 14.4963 20.3625 13.05 20.3625C11.1113 20.3602 9.25271 19.589 7.88185 18.2181C6.51099 16.8473 5.73983 14.9887 5.7375 13.05Z'
            fill='#CCCCCC'
          />
        </svg>
      </div>
      {screenWidth >= 640 && <div className=''></div>}
      <Select
        styles={customStyles}
        placeholder='Сортування...'
        onChange={(e) => setSort(e.value)}
        options={options}
        defaultValue={{ value: 'created_at', label: 'Найстаріші' }}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
}
