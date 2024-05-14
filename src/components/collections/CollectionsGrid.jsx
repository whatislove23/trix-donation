import CollectionCard from '../CollectionCard';
import Paginate from '../Paginate';
import SearchFilter from './SearchFilter';
import Title from '../Title';
import LazyCollectionItem from '../lazy/LazyCollectionItem';

export default function CollectionsGrid({
  collections,
  searchHidden,
  itemsCount,
  itemPerPage = 6,
  setPage,
  setSearch,
  setSort,
  isLoaded,
}) {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 min-[1281px]:p-0'>
      <Title>Відкриті збори</Title>
      {!searchHidden && <SearchFilter setSearch={setSearch} setSort={setSort} />}
      <div className='mt-5 sm:mt-7 lg:mt-9'>
        <div className='grid grid-cols-1 gap-2 custom:grid-cols-2 sm:grid-cols-3 sm:gap-6 lg:gap-9  '>
          {isLoaded ? (
            collections.length <= 0 ? (
              <p className='font-medium text-text-100'>Нічого не знайдено</p>
            ) : (
              collections.map((el) => <CollectionCard key={el.id} {...el} />)
            )
          ) : (
            [1, 2, 3, 4, 5, 6].map((item) => <LazyCollectionItem key={item} />)
          )}
        </div>
        <div className='mt-9 flex w-full justify-center '>
          <Paginate totaItems={itemsCount} itemsPerPage={itemPerPage} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
