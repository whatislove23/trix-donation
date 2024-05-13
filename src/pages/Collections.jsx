import { useEffect, useState } from 'react';
import CollectionsGrid from '../components/collections/CollectionsGrid';
import CollectionsHeroSlider from '../components/collections/CollectionsHeroSlider';
import OrganisationsSlider from '../components/collections/OrganisationsSlider';
import { GoBackCirlce } from '../components/GoBack';

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [page, setPage] = useState({ selected: 0 });

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('created_at');

  const fetchCollections = async (page, search, sort) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/money_collections/api/?page=${page.selected + 1}&ordering=${sort}&search=${search}`,
      );
      const data = await response.json();
      setItemsCount(data.count);
      return setCollections(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchCollections(page, search, sort);
  }, [page, search, sort]);

  return (
    <div className=' relative'>
      <CollectionsHeroSlider />
      <div className='flex flex-col  gap-20 py-20 md:gap-28  md:py-28 lg:gap-32 lg:py-32 '>
        <CollectionsGrid
          collections={collections}
          itemsCount={itemsCount}
          setPage={setPage}
          setSearch={setSearch}
          setSort={setSort}
        />

        <OrganisationsSlider />
      </div>
      <GoBackCirlce />
    </div>
  );
}
