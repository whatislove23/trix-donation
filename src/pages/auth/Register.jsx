import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';
import AuthTemplate from '../../components/AuthTemplate';
import { useState } from 'react';
import { toast } from 'react-toastify';
import authValidate from '../../functions/authValidate';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onUserNameChange = (e) => setUserName(e.target.value);

  const submitForm = () => {
    let errors = authValidate(userName, password, email);
    for (let error in errors) {
      toast.error(errors[error]);
    }
  };
  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center justify-center gap-5'
      >
        <Title>Реєєстрація</Title>
        <Input
          placeholder={'Повне імʼя'}
          type={'text'}
          onChange={onUserNameChange}
          value={userName}
        />
        <Input placeholder={'E-mail'} type={'email'} onChange={onEmailChange} value={email} />
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
