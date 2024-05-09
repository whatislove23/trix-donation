import AddImage from '../../components/dashboard/AddImage';
import Input from '../../components/Input';
import Title from '../../components/Title';

export default function DashboardProfile() {
  return (
    <div className='my-9 '>
      <Title>Мій профіль</Title>
      <div className='mt-5 flex flex-col '>
        <div className='mx-auto h-52 w-full max-w-52 overflow-hidden rounded-lg object-cover'>
          <img src='' alt='' className='h-full w-full ' />
        </div>
        <div className='mt-4 flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold text-text-100'>Волонтер Волонтерович</h2>
          <p className='text-xl font-semibold text-text-200'>
            Пошта: <span className='text-text-100'>myMail@gmail.com</span>
          </p>
          <p className='text-xl font-semibold text-text-200'>
            Роль: <span className='text-text-100'>Користувач</span>
          </p>
          <p className='text-xl font-semibold text-text-200'>
            Дата рєєстрації: <span className='text-text-100'>04.05.23</span>
          </p>
        </div>
        <div className='mt-10 flex flex-col gap-4'>
          <Title>Отримати статус волонтера</Title>
          <AddImage />
          <form action='#' onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2'>
            <div>
              <label htmlFor='pib' className='text-2xl font-semibold text-text-100'>
                ПІБ
                <span className='text-red-500'>*</span>
              </label>
              <Input id='pib' className='' />
            </div>
            <div>
              <label htmlFor='desc' className='text-2xl font-semibold text-text-100'>
                Опис діяльності
                <span className='text-red-500'>*</span>
              </label>
              <textarea
                id='desc'
                className='w-full rounded-2xl border-2  border-bg-300 px-4 py-3 font-medium  text-text-100 placeholder:text-xl placeholder:font-medium '
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
