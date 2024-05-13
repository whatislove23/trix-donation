import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../hooks/useContext.jsx';

import { toast } from 'react-toastify';
import Title from '../components/Title';
import Progress from '../components/Progress';
import ValueBtn from '../components/collection/ValueBtn';
import Input from '../components/Input.jsx';
import Button from '../components/Button';
import PostForm from '../components/collection/PostForm.jsx';
import Post from '../components/collection/Post.jsx';
import GoBack from '../components/GoBack.jsx';
import OpenRequisite from '../components/collection/OpenRequisite.jsx';

const moneyButtons = [
  { id: 1, value: 50, text: '₴50' },
  { id: 2, value: 100, text: '₴100' },
  { id: 3, value: 200, text: '₴200' },
  { id: 4, value: 300, text: '₴300' },
  { id: 5, value: 400, text: '₴400' },
  { id: 6, value: 500, text: '₴500' },
];

export default function Collection() {
  const { id } = useParams();
  const { profile } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [data, setCollectionData] = useState();
  const [subscribed, setSubscribed] = useState(false);
  const [donateTo, setDonateTo] = useState('mono');
  const [userPermisions, setUserPermisions] = useState({});
  const [moneyAmount, setMoneyAmount] = useState(50);

  const [reports, setReports] = useState([]);

  const sum = Math.floor(
    Math.abs(data?.collected_amount_from_other_requisites) +
      Math.abs(data?.collected_amount_on_jar) +
      Math.abs(data?.collected_amount_on_platform),
  );
  const getUserPermition = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE}/users/api/${id}/user-status/`, {
      headers: {
        Authorization: `Bearer ${profile.access_token}`,
      },
    })
      .then((response) => response.json())
      .then(setUserPermisions)
      .catch(console.error);
  };

  const fetchCollection = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE}/money_collections/api/${id}/`)
      .then((response) => response.json())
      .then((respData) => {
        setCollectionData(respData);
        return respData?.organizations[0]?.organization_id;
      })
      .then(getUserPermition)
      .catch(console.error);
  };

  const submitDonate = () => {
    if (moneyAmount) {
      if (donateTo == 'mono') {
        return window.open(`${data.requisites.monobank_jar_link}?a=${moneyAmount}`, '_blank');
      }
      return navigate('/payment', {
        state: { donateAmount: moneyAmount, title: data.goal_title, id: id },
      });
    }
    return toast.error('Введіть суму донату');
  };

  const fetchIsSubscribed = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/collections/${id}/subscription-status/`,
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

  const fetchReports = (id) => {
    fetch(`${import.meta.env.VITE_API_BASE}/money_collections/api/${id}/collection_reposts/`)
      .then((data) => data.json())
      .then(({ results }) => setReports(results))
      .catch(console.error);
  };

  const subscribe = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/collection-subscriptions/create/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${profile.access_token}`,
        },
        body: JSON.stringify({ money_collection_id: id }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.detail);
        fetchIsSubscribed();
      })
      .catch(console.error);
  };
  const unsubscribe = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/money_collections/api/collection-subscriptions/delete/`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${profile.access_token}`,
        },
        body: JSON.stringify({ money_collection_id: id }),
      },
    )
      .then((response) => {
        if (response.status == 204) {
          toast.success('Відписано від організації');
          fetchIsSubscribed();
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchCollection(id);
    fetchReports(id);
    fetchIsSubscribed();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='mx-auto w-full max-w-screen-xl px-4'>
      <GoBack />
      <div className='flex flex-col   gap-20 pb-20 md:gap-28  md:pb-28 lg:gap-32 lg:pb-32'>
        <div className=' rounded-2xl p-5 lg:flex  lg:items-center lg:gap-9 lg:border-2 lg:border-bg-300'>
          <div
            className='logo-bg relative h-64  w-full overflow-hidden  rounded-xl   bg-cover bg-center  bg-no-repeat sm:h-96 lg:h-[583px] lg:w-[600px]'
            style={{ backgroundImage: `url('${data?.preview}')` }}
          >
            <div className='absolute right-4 top-4  rounded-full  bg-white p-1 shadow-lg'>
              {profile.access_token ? (
                subscribed ? (
                  <svg
                    onClick={unsubscribe}
                    className='cursor-pointer  '
                    stroke='#ff0000'
                    fill='#ff0000'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='30px'
                    width='30px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M417.84 448a16 16 0 0 1-11.35-4.72l-365.84-368a16 16 0 1 1 22.7-22.56l365.83 368A16 16 0 0 1 417.84 448zM364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 0 1-9.06 0C245.69 104.82 215.16 80 171.08 80a107.71 107.71 0 0 0-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80zM69 149.15a115.06 115.06 0 0 0-9 43.49c-.54 54.21 18.63 104.25 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0 0 36 0c20.35-13.82 37.7-26.5 52.58-38.12z'></path>
                  </svg>
                ) : (
                  <svg
                    onClick={subscribe}
                    className='cursor-pointer'
                    stroke='#ff0000'
                    fill='#ff0000'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='30px'
                    width='30px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z'></path>
                  </svg>
                )
              ) : null}
            </div>
          </div>
          <div className='mt-5 lg:max-w-[630px]'>
            <Title>{data?.goal_title}</Title>
            <p className=' mt-4 text-xl text-text-200 sm:mt-5 lg:text-2xl'>{data?.description}</p>
            <div className=' my-4 flex items-center gap-1 text-xl font-semibold lg:text-2xl'>
              <p className=' text-text-100'>Організатор: </p>
              <Link
                className='text-text-200 underline'
                to={`/organisation/${data?.organizations[0]?.organization_id}`}
              >
                {data?.organizations[0]?.name}
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between  text-xl font-semibold'>
                <p className=' text-text-100'>₴{sum}</p>
                <p className='text-text-200'>₴{Math.round(Math.abs(data?.goal_amount))}</p>
              </div>
              <Progress complelted={(sum / Math.abs(data?.goal_amount)) * 100} />
            </div>
            <div className='mt-4'>
              <p className='text-xl font-semibold text-text-100'>На рахунок:</p>
              <div className='mt-3 flex flex-wrap gap-4'>
                <ValueBtn
                  text={'Monobank'}
                  isSelected={donateTo == 'mono'}
                  onClick={() => setDonateTo('mono')}
                />
                <ValueBtn
                  text={'TRIX DONATE'}
                  isSelected={donateTo == 'trix'}
                  onClick={() => setDonateTo('trix')}
                />
                {data?.requisites?.bitcoin_wallet_address && (
                  <OpenRequisite
                    title={'Bitcoin'}
                    requisite={data?.requisites?.bitcoin_wallet_address}
                  />
                )}
                {data?.requisites?.ethereum_wallet_address && (
                  <OpenRequisite
                    title={'Etherium'}
                    requisite={data?.requisites?.ethereum_wallet_address}
                  />
                )}
                {data?.requisites?.paypal_email && (
                  <OpenRequisite title={'paypal'} requisite={data?.requisites?.paypal_email} />
                )}
                {data?.requisites?.usdt_wallet_address && (
                  <OpenRequisite title={'Usdt'} requisite={data?.requisites?.usdt_wallet_address} />
                )}
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xl font-semibold text-text-100'>Бажаю задонатити:</p>
              <div className='mt-3 flex flex-wrap gap-4'>
                {moneyButtons.map((item) => (
                  <ValueBtn
                    key={item.id}
                    text={item.text}
                    value={item.value}
                    setValue={setMoneyAmount}
                    isSelected={moneyAmount === item.value}
                  />
                ))}
                <ValueBtn
                  disabled={true}
                  text={'ІНШЕ'}
                  isSelected={![50, 100, 200, 300, 400, 500].includes(moneyAmount)}
                />
              </div>
              <div className='mt-4 flex max-h-14 gap-4'>
                <Input
                  type='number'
                  value={moneyAmount}
                  onChange={(e) => setMoneyAmount(e.target.value)}
                />
                <Button className='w-full' onClick={submitDonate}>
                  Підтримати
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Title>Наші звіти</Title>

          {(userPermisions?.is_organization_creator || userPermisions?.is_organization_staff) && (
            <PostForm collection_id={id} setData={setReports} />
          )}
          <div className='mt-9 flex flex-col gap-9'>
            {reports.map((item, index) => (
              <Post key={Date.now() + index} {...item} /> //
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
