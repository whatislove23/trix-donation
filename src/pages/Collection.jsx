import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Title from '../components/Title';
import Progress from '../components/Progress';
import ValueBtn from '../components/collection/ValueBtn';
import Input from '../components/Input.jsx';
import Button from '../components/Button';
import PostForm from '../components/collection/PostForm.jsx';
import Post from '../components/collection/Post.jsx';

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
  const navigate = useNavigate();
  const [moneyAmount, setMoneyAmount] = useState(50);

  useEffect(() => {}, [id]);
  const goBack = () => navigate(-1);
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4'>
      <div onClick={goBack} className='my-11 flex cursor-pointer items-center gap-2'>
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M14.8959 17.5L23.5844 8.81836C24.227 8.17579 24.227 7.13672 23.5844 6.50098C22.9418 5.8584 21.9028 5.86524 21.2602 6.50098L11.4164 16.3379C10.7944 16.96 10.7807 17.958 11.3686 18.6006L21.2533 28.5059C21.5746 28.8272 21.9985 28.9844 22.4155 28.9844C22.8324 28.9844 23.2563 28.8272 23.5776 28.5059C24.2201 27.8633 24.2201 26.8242 23.5776 26.1885L14.8959 17.5Z'
            fill='#5C5C5C'
          />
        </svg>
        <p className='text-xl text-text-200'>Повернутись назад</p>
      </div>
      <div className='flex flex-col   gap-20 pb-20 md:gap-28  md:pb-28 lg:gap-32 lg:pb-32'>
        <div className=' rounded-2xl p-5 lg:flex  lg:items-center lg:gap-9 lg:border-2 lg:border-bg-300'>
          <div className='h-full max-h-48 w-full overflow-hidden rounded-xl object-cover  sm:max-h-96 lg:h-[583px] lg:w-[600px]'>
            <img
              className='h-full w-full'
              src='https://sunseeker-russia.com/uploads/2023/09/sunseeker-ext16.jpg'
              alt='Baner'
            />
          </div>
          <div className='mt-5 lg:max-w-[630px]'>
            <Title>Збір на пікап</Title>
            <p className=' mt-4 text-xl text-text-200 sm:mt-5 lg:text-2xl'>
              Щоб захисники якнайшвидше отримали машини, потрібна ваша допомога. Приєднуйтеся
              до збору коштів та поширюйте інформацію про наш проєкт.
            </p>
            <div className=' my-4 flex items-center gap-1 text-xl font-semibold lg:text-2xl'>
              <p className=' text-text-100'>Організатор: </p>
              <Link className='text-text-200 underline'>initiator link</Link>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between  text-xl font-semibold'>
                <p className=' text-text-100'>₴28000</p>
                <p className='text-text-200'>₴280000</p>
              </div>
              <Progress complelted={(28000 / 280000) * 100} />
            </div>
            <div className='mt-4'>
              <p className='text-xl font-semibold text-text-100'>На рахунок:</p>
              <div className='mt-3 flex flex-wrap gap-4'>
                <ValueBtn text={'Monobank'} isSelected />
                <ValueBtn text={'Privatbank'} />
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
                <Button className='w-full'>Підтримати</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Title>Наші звіти</Title>
          <PostForm />
          <div className='mt-9 flex flex-col gap-9'>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
