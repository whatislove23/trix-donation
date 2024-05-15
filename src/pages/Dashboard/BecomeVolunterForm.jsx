import { useContext, useEffect, useState } from 'react';

import AddImage from '../../components/dashboard/AddImage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ProfileContext } from '../../hooks/useContext';
import { toast } from 'react-toastify';

export default function BecomeVolunterForm() {
  const { profile } = useContext(ProfileContext);

  const [serverData, setServerData] = useState(null);

  const [image, setImage] = useState(null);
  const [orgName, setOrgName] = useState('');
  const [description, setDescription] = useState('');
  const [insta, setInsta] = useState('');
  const [fb, setFb] = useState('');
  const [twiter, setTwitter] = useState('');
  const [other, setOther] = useState();

  const [checked, setChecked] = useState(true);
  const [edrpo, setEdrpo] = useState('');

  const validateData = () => {
    // Перевірка наявності обов'язкових полів
    if (!image || !orgName || !description) {
      toast.error("Обов'язкові поля (зображення, назва організації, опис) повинні бути заповнені.");
      return false;
    }

    // Перевірка наявності хоча б одного посилання і їхніх форматів
    if (!other && !twiter && !insta && !fb) {
      toast.error(
        'Хоча б одне посилання (Twitter, Instagram, Facebook або інше) повинно бути вказане.',
      );
      return false;
    }

    // Перевірка формату посилань
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    const instagramPattern = /^(http|https):\/\/(www\.)?instagram\.com\/.*$/;
    const facebookPattern = /^(http|https):\/\/(www\.)?facebook\.com\/.*$/;
    const xDotComPattern = /^(http|https):\/\/x\.com\/.*$/;

    if (other && !urlPattern.test(other)) {
      toast.error('Посилання на інші ресурси має бути у форматі URL.');
      return false;
    }
    if (twiter && !xDotComPattern.test(twiter)) {
      toast.error("Посилання має бути у форматі URL 'https://x.com'.");
      return false;
    }
    if (insta && !instagramPattern.test(insta)) {
      toast.error('Посилання на Instagram має бути у форматі URL Instagram.');
      return false;
    }
    if (fb && !facebookPattern.test(fb)) {
      toast.error('Посилання на Facebook має бути у форматі URL Facebook.');
      return false;
    }

    // Перевірка, чи включений чекбокс і чи вказаний EDRPO
    if (checked && !edrpo) {
      toast.error("Якщо ви хочете бути організацією, EDRPO є обов'язковим полем.");
      return false;
    }

    // Якщо всі перевірки пройшли успішно, дані валідні

    return true;
  };

  const createOrganisation = async () => {
    try {
      const formData = new FormData();
      formData.append('name', orgName);
      formData.append('user_details', description);
      formData.append('image', image[0]);
      if (insta) formData.append('instagram_url', insta);
      if (twiter) formData.append('twiter_url', twiter);
      if (fb) formData.append('facebook_url', fb);
      if (other) formData.append('custom_url', other);
      if (checked) formData.append('foundation', String(checked));
      if (checked) formData.append('EGRPOU_code', String(edrpo));
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/organizations/api/request/create/`,
        {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${profile.access_token}`,
          },
          body: formData,
        },
      );
      const responseData = await response.json();
      // console.log(responseData);
      if (responseData.detail) {
        toast.info(responseData.detail);
      }
      if (responseData.non_field_errors) {
        for (let error in responseData.non_field_errors) {
          toast.error(responseData.non_field_errors[error]);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  async function updateForm() {
    try {
      const formData = new FormData();
      formData.append('name', orgName || serverData.name);
      formData.append('user_details', description || serverData.description);
      formData.append('foundation', checked || serverData.checked);
      if (image) formData.append('image', image[0]);
      if (insta) formData.append('instagram_url', insta);
      if (twiter) formData.append('twiter_url', twiter);
      if (fb) formData.append('facebook_url', fb);
      if (other) formData.append('custom_url', other);
      if (checked) formData.append('EGRPOU_code', edrpo);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/organizations/api/user/request/`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
          body: formData,
        },
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.detail) {
        toast.success(responseData.detail);
      }
      if (responseData.non_field_errors) {
        for (let error in responseData.non_field_errors) {
          toast.error(responseData.non_field_errors[error]);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  const getRequest = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/organizations/api/user/request/`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
        },
      );
      const responseData = await response.json();

      responseData.detail && toast.info(responseData.detail);
      responseData.data && setServerData(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const onFormSbmit = () => {
    if (serverData) {
      return updateForm();
    }
    if (validateData()) {
      createOrganisation();
    }
  };
  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center md:mt-9 lg:flex-row lg:gap-9'>
      <AddImage
        image={image}
        setImage={setImage}
        url={serverData?.image}
        className={' md:max-w-80  md:self-center  lg:self-start '}
      />
      <form
        action='#'
        onSubmit={(e) => {
          e.preventDefault();
          onFormSbmit();
        }}
        className='mt-5 flex w-full flex-col gap-2 lg:mt-0'>
        <div>
          <label htmlFor='pib' className='text-2xl font-semibold text-text-100'>
            ПІБ
            <span className='text-red-500'>*</span>
          </label>
          <Input
            id='pib'
            placeholder={serverData?.name}
            className='normal-case'
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='desc' className='text-2xl font-semibold text-text-100'>
            Опис діяльності
            <span className='text-red-500'>*</span>
          </label>
          <textarea
            value={description}
            placeholder={serverData?.user_details}
            onChange={(e) => setDescription(e.target.value)}
            id='desc'
            className='w-full rounded-2xl border-2  border-bg-300 px-4 py-3 font-medium  text-text-100 placeholder:text-xl placeholder:font-medium '
          />
        </div>
        <div>
          <label htmlFor='inst' className='text-2xl font-semibold text-text-100'>
            Instagram
            <span className='text-red-500'>*</span>
          </label>
          <Input
            id='inst'
            placeholder={serverData?.instagram_url}
            className='placeholer:lowercase lowercase'
            value={insta}
            onChange={(e) => setInsta(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='face' className='text-2xl font-semibold text-text-100'>
            Facebook
          </label>
          <Input
            id='face'
            className='lowercase'
            value={fb}
            placeholder={serverData?.facebook_url}
            onChange={(e) => setFb(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor='twit'
            className='text-2xl font-semibold text-text-100'
            placeholder={serverData?.twitter_url}>
            Twitter
          </label>
          <Input
            id='twit'
            className='lowercase'
            value={twiter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='other' className='text-2xl font-semibold text-text-100'>
            Інше посилання
          </label>
          <Input
            id='other'
            className='lowercase'
            value={other}
            placeholder={serverData?.custom_url}
            onChange={(e) => setOther(e.target.value)}
          />
        </div>
        <div className=' flex items-center gap-1'>
          <label htmlFor='' className='text-2xl font-semibold text-text-100'>
            Я хочу створити організацію
          </label>
          <div
            className={`relative h-7 w-7 cursor-pointer border-2 border-bg-400 ${checked && 'bg-accent-200'}`}>
            <svg
              className='absolute left-0 top-0'
              width='25'
              height='25'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M22.6516 19.9998L30.0735 12.578C30.4257 12.2263 30.6238 11.7492 30.6243 11.2515C30.6247 10.7538 30.4274 10.2763 30.0758 9.92405C29.7242 9.57181 29.247 9.37368 28.7493 9.37324C28.2516 9.3728 27.7741 9.57009 27.4219 9.92171L20 17.3436L12.5781 9.92171C12.2259 9.56947 11.7482 9.37158 11.25 9.37158C10.7519 9.37158 10.2741 9.56947 9.92189 9.92171C9.56965 10.274 9.37177 10.7517 9.37177 11.2498C9.37177 11.748 9.56965 12.2257 9.92189 12.578L17.3438 19.9998L9.92189 27.4217C9.56965 27.7739 9.37177 28.2517 9.37177 28.7498C9.37177 29.248 9.56965 29.7257 9.92189 30.078C10.2741 30.4302 10.7519 30.6281 11.25 30.6281C11.7482 30.6281 12.2259 30.4302 12.5781 30.078L20 22.6561L27.4219 30.078C27.7741 30.4302 28.2519 30.6281 28.75 30.6281C29.2482 30.6281 29.7259 30.4302 30.0781 30.078C30.4304 29.7257 30.6283 29.248 30.6283 28.7498C30.6283 28.2517 30.4304 27.7739 30.0781 27.4217L22.6516 19.9998Z'
                fill='#ffffff'
              />
            </svg>

            <input
              className='h-full w-full opacity-0'
              type='checkbox'
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              id='check'
            />
          </div>
        </div>
        {checked && (
          <div>
            <label htmlFor='edrpou' className='text-2xl font-semibold text-text-100'>
              ЕДРПО
            </label>
            <Input
              id='edrpou'
              type='number'
              className='lowercase'
              value={edrpo}
              placeholder={serverData?.EGRPOU_code}
              onChange={(e) => setEdrpo(e.target.value)}
            />
          </div>
        )}
        <Button className={'h-14 w-full px-5 md:max-w-64 md:self-start'} type='submit'>
          Надіслати запит
        </Button>
      </form>
    </div>
  );
}
