import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfileContext } from '../../hooks/useContext';

import CollectionCard from '../../components/CollectionCard';
import Title from '../../components/Title';
import CreateNewCollectionForm from '../../components/dashboard/CreateNewCollectionForm';
import Paginate from '../../components/Paginate';

function Organisation() {
  const { profile } = useContext(ProfileContext);

  const navigate = useNavigate();

  const [itemsCount, setItemsCount] = useState(1);
  const [collections, setCollections] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [page, setPage] = useState({ selected: 0 });

  const getMyOrganisation = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/users/api/organizations/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${profile?.access_token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.length) {
          toast.info('В вас поки що немає підтверджених організацій');
          return navigate('/dashboard/profile/');
        }
        setData(data[0]);
        setId(data[0]?.organization_id);
        getCollectionsByID(data[0]?.organization_id);
      })
      .catch(console.error);
  };

  const getCollectionsByID = (id) => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/organizations/${id}/collections/?page=${page.selected + 1}&page_size=${page.selected + 1 == 1 ? 5 : 6}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCollections(data.results);
        setItemsCount(data.count);
      });
  };

  useEffect(() => {
    getMyOrganisation();
  }, [page]);

  return (
    <div className='my-9 w-full rounded-2xl md:border-2 md:border-bg-300 md:p-5 lg:my-0'>
      <Title>{data?.name}</Title>
      <div className='mt-9 grid w-full  grid-cols-1  gap-4  min-[400px]:grid-cols-2 sm:grid sm:grid-rows-2  md:mt-9 md:grid-cols-3'>
        <CreateNewCollectionForm organisationId={id} />
        {collections?.map((item) => (
          <CollectionCard key={item?.id} {...item} isProfile />
        ))}
      </div>
      <div className='mt-9'>
        <Paginate
          totaItems={itemsCount}
          setPage={setPage}
          itemsPerPage={page.selected + 1 == 1 ? 5 : 6}
        />
      </div>
    </div>
  );
}

export default Organisation;
