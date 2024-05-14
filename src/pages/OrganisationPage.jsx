import { useContext, useEffect, useState } from 'react';

import CollectionsGrid from '../components/collections/CollectionsGrid';
import { GoBackCirlce } from '../components/GoBack';
import { ProfileContext } from '../hooks/useContext';
import Title from '../components/Title';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function OrganisationPage() {
  const { id } = useParams();
  const { profile } = useContext(ProfileContext);

  const [data, setData] = useState();
  const [page, setPage] = useState({ selected: 0 });
  const [collections, setCollections] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [isSubscribed, setSubscribed] = useState(false);
  const [loaded, setIsloaded] = useState(false);
  const fetchOrganistaionData = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/organizations/api/organizations/${id}`)
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch(console.error);
  };
  const fetchIsSubscribed = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/organizations/api/organizations/${id}/subscription-status/`,
      {
        headers: {
          Authorization: `Bearer ${profile?.access_token}`,
        },
      },
    )
      .then((data) => data.json())
      .then((res) => setSubscribed(res.is_subscribed))
      .catch(console.error);
  };
  const fetchCollections = () => {
    setIsloaded(false);
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/organizations/${id}/collections/?page=${page.selected + 1}&active=t`,
    )
      .then((response) => response.json())
      .then((data) => {
        setIsloaded(true);
        setItemsCount(data.count);
        setCollections(data.results);
      })
      .catch(console.error);
  };
  const subscribe = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/organizations/api/organization-subscriptions/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${profile.access_token}`,
      },
      body: JSON.stringify({ organization_id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.detail);
        fetchIsSubscribed();
      })
      .catch(console.error);
  };
  const unsubscribe = () => {
    fetch(`${import.meta.env.VITE_API_BASE}/organizations/api/organization-subscriptions/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${profile.access_token}`,
      },
      body: JSON.stringify({ organization_id: id }),
    })
      .then((response) => {
        if (response.status == 204) {
          toast.success('Відписано від організації');
          fetchIsSubscribed();
        }
      })
      .catch(console.error);
  };
  useEffect(() => {
    fetchOrganistaionData();
    fetchIsSubscribed();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchCollections();
  }, [page]);

  return (
    <>
      <div
        className=' h-64 w-full overflow-hidden  bg-logobg bg-cover bg-center bg-no-repeat sm:h-72 lg:h-96'
        style={{ backgroundImage: `url('${data?.avatar}')` }}>
        <div className='relative h-64 w-full bg-black bg-opacity-70 backdrop-blur-sm sm:h-72 lg:h-96'>
          <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 '>
            <Title className={' text-white mix-blend-difference '}>
              {data?.foundation ? 'Організація' : 'Волонтер'} {data?.name}
            </Title>
            <div className='mx-auto mt-10 flex w-min items-center gap-4 mix-blend-difference'>
              {profile.access_token ? (
                isSubscribed ? (
                  <svg
                    onClick={unsubscribe}
                    className='cursor-pointer mix-blend-difference  '
                    stroke='currentColor'
                    fill='#ffffff'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='50px'
                    width='50px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M417.84 448a16 16 0 0 1-11.35-4.72l-365.84-368a16 16 0 1 1 22.7-22.56l365.83 368A16 16 0 0 1 417.84 448zM364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 0 1-9.06 0C245.69 104.82 215.16 80 171.08 80a107.71 107.71 0 0 0-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80zM69 149.15a115.06 115.06 0 0 0-9 43.49c-.54 54.21 18.63 104.25 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0 0 36 0c20.35-13.82 37.7-26.5 52.58-38.12z'></path>
                  </svg>
                ) : (
                  <svg
                    onClick={subscribe}
                    className='cursor-pointer mix-blend-difference  '
                    stroke='currentColor'
                    fill='#ffffff'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='50px'
                    width='50px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z'></path>
                  </svg>
                )
              ) : null}
              {data?.instagram && (
                <a href={data.instagram} target='_blank'>
                  <svg
                    className='cursor-pointer mix-blend-difference  '
                    stroke='currentColor'
                    fill='#ffffff'
                    strokeWidth='0'
                    viewBox='0 0 16 16'
                    height='40px'
                    width='40px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'></path>
                  </svg>
                </a>
              )}
              {data?.facebook && (
                <a href={data.facebook} target='_blank'>
                  <svg
                    stroke='#fffff'
                    fill='#ffff'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='46px'
                    width='46px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'></path>
                  </svg>
                </a>
              )}
              {data?.twitter && (
                <a href={data.twitter} target='_blank'>
                  <svg
                    stroke='#fffff'
                    fill='#ffff'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    height='50px'
                    width='50px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z'></path>
                  </svg>
                </a>
              )}
              {data?.customURL && (
                <a href={data.customURL} target='_blank'>
                  <svg
                    stroke='#fffff'
                    fill='#ffff'
                    strokeWidth='0'
                    viewBox='0 0 496 512'
                    height='45px'
                    width='45px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto my-20 w-full max-w-screen-xl p-4 sm:my-28 lg:my-32 min-[1281px]:p-0'>
        {collections.length > 0 ? (
          <CollectionsGrid
            searchHidden={true}
            isLoaded={loaded}
            collections={collections}
            itemsCount={itemsCount}
            setPage={setPage}
          />
        ) : (
          <Title>В нас поки що немає зборів =)</Title>
        )}
        <GoBackCirlce />
      </div>
    </>
  );
}
