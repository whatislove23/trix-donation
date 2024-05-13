import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Cards from 'react-credit-cards-2';
import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import { GoBackCirlce } from '../components/GoBack';

import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { toast } from 'react-toastify';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const donate = () => {
    const isEmpty = Object.values(state).some((value) => value === '');
    if (isEmpty) return toast.error('Всі поля мають бути заповненими');
    fetch(`${import.meta.env.VITE_API_BASE}/money_collections/api/${location?.state.id}/payment`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        card_number: state.number,
        cvv: state.cvc,
        expiration_date: state.expiry.slice(0, 2) + '/' + state.expiry.slice(2),
        amount: location.state?.donateAmount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          Object.keys(data).forEach((key) => {
            const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
            toast.error(`${formattedKey} ${data[key][0]}`);
          });
        }
        toast.success(data.message);
        return navigate(-1);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (location?.state == null) {
      return navigate('/', { replace: true });
    }
  }, []);

  const setInputChange = (e) => {
    const value = e.target.value;
    const isValid = /^[0-9]{1,16}$/.test(value);
    if (isValid || value == '') setState((prev) => ({ ...prev, number: value }));
  };

  const setCardName = (e) => {
    setState((prev) => ({ ...prev, name: e.target.value }));
  };
  const setCardDate = (e) => {
    const value = e.target.value;
    const isValid = /^[0-9]{0,4}$/.test(value);
    if (isValid) setState((prev) => ({ ...prev, expiry: value }));
  };
  const setCVV = (e) => {
    const value = e.target.value;
    const isValid = /^[0-9]{0,3}$/.test(value);
    if (isValid) setState((prev) => ({ ...prev, cvc: value }));
  };
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <div className='relative mx-auto my-auto  flex h-screen w-full max-w-screen-xl  flex-col items-center justify-center'>
      <div className='flex  max-w-lg flex-col justify-center  gap-5 rounded-xl px-4 min-[500px]:border-2  min-[500px]:border-bg-300 min-[500px]:p-10 sm:rounded-2xl sm:shadow'>
        <div className='flex flex-col gap-2'>
          <Title>Я доначу ₴{location?.state?.donateAmount} на</Title>
          <p className='mt-4 rounded-md bg-bg-200 p-2 font-medium text-text-100  shadow'>
            {location?.state?.title}
          </p>
        </div>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <div className='flex flex-col gap-2'>
          <Input
            type='number'
            value={state.number}
            className={'w-full'}
            placeholder={'Номер карти'}
            maxLength={16}
            minLength={16}
            onFocus={handleInputFocus}
            name='number'
            onChange={setInputChange}
          />
          <Input
            placeholder={'Імʼя'}
            value={state.name}
            name='name'
            onChange={setCardName}
            onFocus={handleInputFocus}
          />

          <div className='flex gap-2'>
            <Input
              placeholder={'CVV'}
              value={state.cvc}
              onChange={setCVV}
              onFocus={handleInputFocus}
              name='cvc'
            />
            <Input
              placeholder={'мм/рр'}
              value={state.expiry}
              name='expiry'
              onChange={setCardDate}
              onFocus={handleInputFocus}
            />
          </div>
          <Button onClick={donate}>Задонатити</Button>
        </div>
      </div>
      <GoBackCirlce />
    </div>
  );
}
