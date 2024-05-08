import { toast } from 'react-toastify';
import authValidate from '../../functions/authValidate';
import { useState } from 'react';
import AuthTemplate from '../../components/AuthTemplate';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const onEmailChange = (e) => setEmail(e.target.value);

  const onSubmit = async () => {
    if (!authValidate(undefined, undefined, email, true)) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/api/password_reset/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const responseData = await response.json();
      if (responseData.message) toast.error(responseData.message);
      if (responseData === 'Okay') {
        return navigate('/reset-code', {
          state: { email: email, forgotPassword: true },
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center justify-center gap-5'>
        <Title>Забули пароль?</Title>
        <Input
          placeholder={'E-mail'}
          type={'email'}
          onChange={onEmailChange}
          value={email}
          className={'lowercase'}
        />

        <div className='flex w-full flex-col items-center gap-4'>
          <Button className='w-full' onClick={onSubmit}>
            Надіслати код
          </Button>
          <div className=' flex gap-1'>
            <p className='font-semibold text-text-200 '>Згадали пароль?</p>{' '}
            <Link to='/auth' className='font-semibold text-primary-200'>
              Авторизуватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
