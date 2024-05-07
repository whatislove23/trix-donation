import { toast } from 'react-toastify';
import authValidate from '../../functions/authValidate';
import { useState } from 'react';
import AuthTemplate from '../../components/AuthTemplate';
import Title from '../../components/Title';

import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import ReactCodeInput from 'react-code-input';

import styles from './ReactCodeInput.module.css';

export default function ResetCode() {
  const [pinCode, setPinCode] = useState('');

  const onSubmit = () => {
    let errors = authValidate(undefined, pinCode, undefined, true);
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
