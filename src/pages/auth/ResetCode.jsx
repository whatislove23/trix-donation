import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import authValidate from '../../functions/authValidate';

import AuthTemplate from '../../components/AuthTemplate';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ReactCodeInput from 'react-code-input';

import styles from './ReactCodeInput.module.css';

export default function ResetCode() {
  const [pinCode, setPinCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  //redirects to /auth or /new-password  after validation based on flag
  const verifyCode = async () => {
    if (location.state.email) {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/api/code_validate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: location.state.email,
          code: pinCode,
        }),
      });
      const fetchResponse = await response.json();
      if (fetchResponse.valid) {
        toast.success('Підтверджено');
        if (location.state.forgotPassword) {
          navigate('/new-password', {
            state: { email: location.state.email, forgotPassword: true },
          });
        } else {
          navigate('/auth');
        }
      } else if (!fetchResponse.valid) {
        toast.error('Код невірний');
      } else if (fetchResponse.message) {
        toast.error(fetchResponse.message);
      }
      return;
    }
    toast.error('No email provided');
  };

  const onSubmit = () => {
    if (!authValidate(undefined, pinCode, undefined, true)) return;
    try {
      verifyCode();
    } catch (error) {
      console.error(error);
    }
  };
  // send email code after creating new account (redirect) but dont when its password reset
  useEffect(() => {
    try {
      const sendCode = async () => {
        if (location.state.email && !location.state.forgotPassword) {
          const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/api/email_verify/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: location.state.email,
            }),
          });
          const fetchResponse = await response.json();
          if (fetchResponse === 'Okay') toast.success('Код надіслано');
          return;
        }
        if (!location.state.email) {
          toast.error('No email provided');
        }
      };
      sendCode();
    } catch (error) {
      console.error(error);
    }
  }, [location]);

  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col'>
          <Title>Введіть код</Title>
          <p className='mt-1 text-center font-semibold text-text-200'>
            Ми надіслали код Вам на пошту
          </p>
        </div>
        <ReactCodeInput
          className={styles.codeInput}
          id='pinCode'
          type='number'
          fields={6}
          value={pinCode}
          onChange={setPinCode}
        />
        <div className='flex w-full flex-col items-center gap-4'>
          <Button className='w-full' onClick={onSubmit}>
            Оновити
          </Button>
          <div className=' flex items-center gap-1'>
            <p className='font-semibold text-text-200 '>Згадали пароль?</p>
            <Link to='/auth' className='font-semibold text-primary-200'>
              Авторизуватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
