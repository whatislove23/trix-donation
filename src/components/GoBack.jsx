import { useNavigate } from 'react-router-dom';

export default function GoBack({ className }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const styles = 'my-11 flex cursor-pointer items-center gap-2 ' + className;
  return (
    <div onClick={goBack} className={styles}>
      <svg
        width='35'
        height='35'
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.8959 17.5L23.5844 8.81836C24.227 8.17579 24.227 7.13672 23.5844 6.50098C22.9418 5.8584 21.9028 5.86524 21.2602 6.50098L11.4164 16.3379C10.7944 16.96 10.7807 17.958 11.3686 18.6006L21.2533 28.5059C21.5746 28.8272 21.9985 28.9844 22.4155 28.9844C22.8324 28.9844 23.2563 28.8272 23.5776 28.5059C24.2201 27.8633 24.2201 26.8242 23.5776 26.1885L14.8959 17.5Z'
          fill='#5C5C5C'
        />
      </svg>
      <p className='text-xl text-text-200'>Повернутись назад</p>
    </div>
  );
}

export function GoBackCirlce() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <svg
      onClick={goBack}
      className='hover:tr fixed bottom-4  right-4 h-10  w-10 cursor-pointer '
      width='50px'
      height='50px'
      viewBox='0 0 35 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.8959 17.5L23.5844 8.81836C24.227 8.17579 24.227 7.13672 23.5844 6.50098C22.9418 5.8584 21.9028 5.86524 21.2602 6.50098L11.4164 16.3379C10.7944 16.96 10.7807 17.958 11.3686 18.6006L21.2533 28.5059C21.5746 28.8272 21.9985 28.9844 22.4155 28.9844C22.8324 28.9844 23.2563 28.8272 23.5776 28.5059C24.2201 27.8633 24.2201 26.8242 23.5776 26.1885L14.8959 17.5Z'
        fill='#ffa500'
      />
    </svg>
  );
}
