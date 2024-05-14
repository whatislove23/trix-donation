import Modal from 'react-modal';
import Title from '../Title';
import ValueBtn from './ValueBtn';
import { toast } from 'react-toastify';
import { useState } from 'react';

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
    maxWidth: 'min-content',
    maxHeight: 'min-content',
    position: 'absolute',
    margin: 'auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '15px',
    outline: 'none',
    padding: '15px',
  },
};
Modal.setAppElement('#root');

export default function OpenRequisite({ title, requisite }) {
  const [isOpen, setOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(requisite);
      toast.success('Скопійовано');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setOpen(false)} style={customStyles}>
        <div
          className='flex max-w-min cursor-pointer  flex-col justify-center gap-2'
          onClick={copyToClipboard}
        >
          <Title>{title}</Title>
          <p className='  max-w-2xl overflow-auto text-wrap text-xs md:text-lg lg:text-xl'>
            {requisite}
          </p>
          <svg
            className='self-center'
            stroke='#333333'
            fill='#333333'
            strokeWidth='0'
            viewBox='0 0 448 512'
            height='20px'
            width='20px'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z'></path>
          </svg>
        </div>
      </Modal>
      <ValueBtn text={title} onClick={() => setOpen(true)} />
    </>
  );
}
