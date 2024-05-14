export default function AddImage({ image, setImage, url, className, isEditable = true }) {
  const handleFileChange = (e) => {
    setImage(Array.from(e.target.files));
  };
  const cardStyle = `justify-center  relative flex h-80 w-full max-w-80 items-center ` + className;

  return (
    <div className={cardStyle}>
      <div
        className='flex  h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-bg-300 bg-bg-200 bg-cover bg-center '
        style={{
          backgroundImage: `url('${image?.length > 0 ? URL.createObjectURL(image[0]) : url}')`,
        }}
      >
        {image?.length > 0 || url ? null : (
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
        )}
      </div>
      <input
        disabled={!isEditable}
        type='file'
        accept='image/*'
        className='absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0'
        onChange={handleFileChange}
      />
    </div>
  );
}
