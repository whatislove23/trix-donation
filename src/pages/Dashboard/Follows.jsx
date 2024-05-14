import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../hooks/useContext';

import Title from '../../components/Title';
import Paginate from '../../components/Paginate.jsx';
import CollectionCard from '../../components/CollectionCard.jsx';
import OrganisationCard from '../../components/collections/OrganisationCard';

export default function Follows() {
  const { profile } = useContext(ProfileContext);

  const [organistionFollows, setOrganisationFollows] = useState([]);
  const [organisationsCount, setOrganisationsCount] = useState(1);
  const [organisationPage, setOrganisationPage] = useState({ selected: 0 });

  const [collectionsFollows, setCollectionsFollows] = useState([]);
  const [collectionsCount, setCollectionsCount] = useState(1);
  const [collectionPage, setCollectionPage] = useState({ selected: 0 });

  const fetchOrganisationSubscribitions = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/organizations/api/user/subscribed-organizations/?page=${organisationPage.selected + 1}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${profile?.access_token}`,
        },
      },
    )
      .then((data) => data.json())
      .then((data) => {
        setOrganisationsCount(data.count);
        setOrganisationFollows(data.results);
      })
      .catch(console.error);
  };
  const fetchCollectionSubscribitions = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/user/subscribed-collections/?page=${collectionPage.selected + 1}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${profile?.access_token}`,
        },
      },
    )
      .then((data) => data.json())
      .then((data) => {
        setCollectionsCount(data.count);
        setCollectionsFollows(data.results);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchCollectionSubscribitions();
  }, [collectionPage]);

  useEffect(() => {
    fetchOrganisationSubscribitions();
  }, [organisationPage]);

  return (
    <div className='my-9 flex  w-full flex-col gap-14 rounded-2xl md:border-2 md:border-bg-300 md:p-5 lg:my-0'>
      <div>
        <Title>Підписки</Title>

        {collectionsFollows?.length > 0 ? (
          <div>
            <div className='mt-5 grid w-full  grid-cols-1  gap-4  min-[400px]:grid-cols-2 sm:grid   md:mt-9 md:grid-cols-3 '>
              {collectionsFollows.map((item) => (
                <CollectionCard key={item.id} {...item} isProfile={true} />
              ))}
            </div>
            <Paginate totaItems={collectionsCount} setPage={setCollectionPage} />
          </div>
        ) : (
          <p className='mt-7 text-center text-xl'>Ви поки що не підписались на збори</p>
        )}
      </div>
      <div>
        <Title>Організації та волонтери</Title>
        {organistionFollows?.length > 0 ? (
          <div>
            <div className='mt-5 grid w-full  grid-cols-1  gap-4  min-[400px]:grid-cols-2 sm:grid   md:mt-9 md:grid-cols-3'>
              {organistionFollows?.map((organisation) => (
                <OrganisationCard key={organisation?.organization_id} {...organisation} />
              ))}
            </div>
            <Paginate totaItems={organisationsCount} setPage={setOrganisationPage} />
          </div>
        ) : (
          <p className='mt-7 text-center text-xl'>Ви поки що не підписались на організації</p>
        )}
      </div>
    </div>
  );
}
