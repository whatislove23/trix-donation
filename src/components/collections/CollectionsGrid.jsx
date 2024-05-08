import tempdata from '../../temp/data';
import CollectionCard from '../CollectionCard';
import Title from '../Title';
import ReactPaginate from 'react-paginate';
import SearchFilter from './SearchFilter';

export default function CollectionsGrid() {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 min-[1281px]:p-0'>
      <Title>Відкриті збори</Title>
      <SearchFilter />
      <div className='mt-5 sm:mt-7 lg:mt-9'>
        <div className='grid grid-cols-1 gap-2 custom:grid-cols-2 sm:grid-cols-3 sm:gap-6 lg:gap-9 '>
          {tempdata.map((el) => (
            <CollectionCard key={el.id} {...el} />
          ))}
        </div>
        <div className='mt-9 flex w-full justify-center '>
          <ReactPaginate
            className='flex flex-wrap items-center justify-center gap-2'
            pageClassName='w-11 flex h-11 items-center justify-center'
            pageLinkClassName='border-2 border-bg-300  h-11 p-2 w-full flex items-center justify-center text-xl  text-text-200'
            activeLinkClassName='text-[#333333] border-text-100'
            breakLabel={null}
            nextLabel={null}
            pageCount={51}
            pageRangeDisplayed={2}
            previousLabel={null}
            marginPagesDisplayed={1}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}
