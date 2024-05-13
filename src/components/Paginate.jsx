import ReactPaginate from 'react-paginate';

export default function Paginate({ totaItems, setPage, itemsPerPage = 6 }) {
  return (
    <ReactPaginate
      className='mt-5 flex flex-wrap items-center justify-center gap-2'
      pageClassName='w-11 flex h-11 items-center justify-center'
      pageLinkClassName='border-2 border-bg-300  h-11 p-2 w-full flex items-center justify-center text-xl  text-text-200'
      activeLinkClassName='text-[#333333] border-text-100'
      breakLabel={null}
      nextLabel={null}
      pageCount={Math.ceil(totaItems / itemsPerPage)}
      pageRangeDisplayed={2}
      previousLabel={null}
      onPageChange={setPage}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
}
