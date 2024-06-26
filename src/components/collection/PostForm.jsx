import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState } from 'react';

import Button from '../Button';
import Input from '../Input.jsx';
import { ProfileContext } from '../../hooks/useContext.jsx';
import { toast } from 'react-toastify';

function PostForm({ collection_id, setData }) {
  const { profile } = useContext(ProfileContext);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [spent, setSpent] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState('');

  const splitFiles = (files) => {
    const videos = [];
    const images = [];
    files.forEach((file) => {
      if (file.type.startsWith('video')) {
        videos.push(file);
      } else if (file.type.startsWith('image')) {
        images.push(file);
      }
    });
    return { videos, images };
  };
  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const submitForm = () => {
    const { videos, images } = splitFiles(selectedFiles);
    const formData = new FormData();
    formData.append('name', title);
    formData.append('description', description);
    formData.append('price', spent);
    images.forEach((item) => formData.append('images', item));
    videos.forEach((item) => formData.append('videos', item));

    fetch(`${import.meta.env.VITE_API_BASE}/money_collections/api/${collection_id}/reports/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${profile.access_token}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 413) {
          toast.error('Файли завеликі');
          throw new Error('Payload Too Large');
        }
        return response.json();
      })
      .then((data) => {
        if (typeof data.name == 'string') {
          setData((prev) => [...prev, data]);
          setSelectedFiles([]);
          setSpent(0);
          setDescription('');
          setTitle('');
          toast.success('Звіт додано');
          return;
        }
        Object.keys(data).forEach((key) => {
          const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
          toast.error(`${formattedKey} ${data[key][0]}`);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='mt-9 rounded-xl border-2 border-bg-300  p-5 md:flex md:items-center md:gap-11'>
      <div className='w-full md:max-w-80 lg:max-w-[600px]'>
        {selectedFiles.length > 0 && (
          <Swiper
            className='h-80 w-full '
            slidesPerView={1}
            spaceBetween={8}
            autoplay={{ delay: 10000 }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {selectedFiles.map((file) => (
              <SwiperSlide key={file.name}>
                <div className='aspect-square h-full w-full overflow-hidden rounded-lg object-cover'>
                  {file.type.startsWith('image') ? (
                    <img src={URL.createObjectURL(file)} className='aspect-square h-full w-full' />
                  ) : (
                    <video
                      src={URL.createObjectURL(file)}
                      controls
                      className='aspect-square h-full w-full'
                    ></video>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div
          className={`relative flex w-full items-center justify-center ${selectedFiles.length > 0 ? 'mt-4 h-20' : ' h-80 '} md:max-w-80  lg:max-w-[600px]`}
        >
          <div className='flex  h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-bg-300 bg-bg-200'>
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
          <input
            type='file'
            accept='image/*,video/*'
            multiple
            className='absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0'
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className='mt-6 flex flex-col gap-2 text-text-100 md:w-full'>
        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold '>Заголовок</p>
          <Input type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold'>Витрачена сума</p>
          <Input type={'number'} value={spent} onChange={(e) => setSpent(e.target.value)} />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold'>Опис</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='min-h-24 w-full rounded-2xl border-2  border-bg-300 px-4 py-3 font-medium uppercase text-text-100 placeholder:text-xl placeholder:font-medium placeholder:uppercase'
          ></textarea>
        </div>
        <Button className={'lg:mt-5'} onClick={submitForm}>
          Опублікувати
        </Button>
      </div>
    </div>
  );
}

export default PostForm;
