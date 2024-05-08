import { useState } from 'react';
import AuthTemplate from '../../components/AuthTemplate';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import authValidate from '../../functions/authValidate';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!authValidate(undefined, password, email, true)) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center justify-center gap-5'>
        <Title>Авторизація</Title>
        <Input
          placeholder={'E-mail'}
          type={'email'}
          onChange={onEmailChange}
          value={email}
          className={'lowercase'}
        />
        <div className='flex w-full flex-col gap-1'>
          <Input
            placeholder={'Пароль'}
            type={'password'}
            value={password}
            onChange={onPasswordChange}
          />
          <Link to='/password-reset' className='self-end text-sm font-semibold text-text-200'>
            Забули пароль?
          </Link>
        </div>
        <div className='flex w-full flex-col items-center gap-4'>
          <Button className={'w-full'} onClick={onSubmit}>
            Авторизуватись
          </Button>
          <div className=' flex gap-1'>
            <p className='font-semibold text-text-200 '>Не маєте аккаунт?</p>{' '}
            <Link to='/register' className='font-semibold text-primary-200'>
              Зарєєструватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
