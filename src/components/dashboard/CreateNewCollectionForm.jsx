import { useContext, useEffect, useState } from 'react';

import AddImage from './AddImage';
import Button from '../Button';
import Input from '../Input';
import Modal from 'react-modal';
import { ProfileContext } from '../../hooks/useContext';
import Title from '../Title';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(2, 2, 2, 0.75)',
    zIndex: '100',
  },
  content: {
    position: 'absolute',
    maxWidth: '650px',
    margin: '0 auto 0 auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '15px',
    outline: 'none',
    padding: '20px',
  },
};
Modal.setAppElement('#root');

export default function CreateNewCollectionForm({ organisationId }) {
  const { profile } = useContext(ProfileContext);

  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [image, setImage] = useState();

  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [monoLink, setMonoLink] = useState('');
  const [monoCard, setMonoCard] = useState('');
  const [paypal, setPaypal] = useState('');
  const [etherium, setEtherium] = useState('');
  const [usdt, setUsdt] = useState('');
  const [bitcoin, setBitcoin] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('goal_amount', goal);
    formData.append('goal_title', name);
    formData.append('description', description);
    formData.append('preview', image && image[0]);
    formData.append('requisites.monobank_jar_link', monoLink);
    formData.append('requisites.monobank_jar_number', monoCard);
    formData.append('requisites.paypal_email', paypal);
    formData.append('requisites.ethereum_wallet_address', etherium);
    formData.append('requisites.usdt_wallet_address', usdt);
    formData.append('requisites.bitcoin_wallet_address', bitcoin);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/money_collections/api/organizations/${organisationId}/money_collections/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${profile?.access_token}`,
          },
          body: formData,
        },
      );
      const data = await response.json();
      if (data.id) {
        toast.success('Збір створено');
        return navigate(`/collections/${data.id}`);
      }
      Object.keys(data).forEach((key) => {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        toast.error(`${formattedKey} ${data[key][0]}`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setOpen(false)} style={customStyles}>
        <div className='mt-4 flex  flex-col'>
          <Title>Створення збору</Title>
          <div className='mt-6 flex flex-col '>
            <AddImage setImage={setImage} image={image} className={'self-center'} />
            <form className='mt-4 flex flex-col gap-4' onSubmit={submitForm}>
              <Input
                type='text'
                placeholder={'Назва збору'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Опис збору'
                className='w-full rounded-2xl border-2  border-bg-300 px-4 py-3 font-medium  text-text-100 placeholder:text-xl placeholder:font-medium '
              ></textarea>
              <Input
                type={'number'}
                placeholder={'Мета збору ₴'}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'Посилання на Монобанку'}
                value={monoLink}
                onChange={(e) => setMonoLink(e.target.value)}
              />
              <Input
                type={'number'}
                placeholder={'Реквізити Монобанку'}
                onChange={(e) => setMonoCard(e.target.value)}
                value={monoCard}
              />
              <Input
                type={'text'}
                placeholder={'PayPal E-mail'}
                onChange={(e) => setPaypal(e.target.value)}
                value={paypal}
              />
              <Input
                type={'text'}
                placeholder={'Bitcoin wallet'}
                value={bitcoin}
                onChange={(e) => setBitcoin(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'Ethereum wallet'}
                value={etherium}
                onChange={(e) => setEtherium(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'USD-T wallet'}
                value={usdt}
                onChange={(e) => setUsdt(e.target.value)}
              />
              <Button type={'submit'} className={'max-w-min self-center'}>
                Опублікувати
              </Button>
            </form>
          </div>
        </div>
      </Modal>
      <button onClick={() => setOpen(true)}>
        <div className='flex  h-full min-h-64 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-bg-300 bg-bg-200 object-cover'>
          <svg
            width='46'
            height='45'
            viewBox='0 0 46 45'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23 9.84375V35.1562M35.6562 22.5H10.3438'
              stroke='#CCCCCC'
              strokeWidth='5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
    </>
  );
}
