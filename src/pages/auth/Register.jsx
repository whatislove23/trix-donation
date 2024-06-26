import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ProfileContext } from '../../hooks/useContext';
import Title from '../../components/Title';
import authValidate from '../../functions/authValidate';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);

  const submitForm = async () => {
    if (!authValidate(undefined, password, email)) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/api/create/`, {
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
      if (typeof responseData.email == 'string') {
        navigate('/reset-code', { state: { email: responseData.email, forgotPassword: false } });
        return toast.success('Користувача створено');
      }
      toast.error('Користувач з такою поштою вже існує');
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (profile?.access_token) return <Navigate to='/dashboard' replace />;
  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center justify-center gap-5'>
        <Title>Реєєстрація</Title>

        <Input
          placeholder={'E-mail'}
          type={'email'}
          onChange={onEmailChange}
          value={email}
          className='normal-case'
        />
        <Input
          placeholder={'Пароль'}
          type={'password'}
          value={password}
          onChange={onPasswordChange}
        />
        <div className='flex w-full flex-col items-center gap-4'>
          <Button className={'w-full'} onClick={submitForm}>
            Зарєєструватись
          </Button>
          <div className=' flex gap-1'>
            <p className='font-semibold text-text-200 '>Маєте аккаунт?</p>{' '}
            <Link to='/auth' className='font-semibold text-primary-200'>
              Авторизуватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
