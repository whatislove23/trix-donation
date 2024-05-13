import { useContext, useEffect } from 'react';
import { ProfileContext } from '../hooks/useContext';

import NavBtn from './dashboard/NavBtn';

export default function Menu({ isMenuOpen, setMenuOpen }) {
  const { profile, setProfile } = useContext(ProfileContext);

  useEffect(() => {
    document.body.style = 'overflow:hidden';
    return () => (document.body.style = 'overflow:auto');
  }, [isMenuOpen]);

  return (
    <div
      onClick={() => setMenuOpen(false)}
      className=' absolute left-0 top-0  z-30 flex h-screen w-full cursor-pointer justify-end bg-bg-400 bg-opacity-40 backdrop-blur-sm'
    >
      <svg
        className='absolute right-0 top-0'
        onClick={() => setMenuOpen(false)}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.6516 19.9998L30.0735 12.578C30.4257 12.2263 30.6238 11.7492 30.6243 11.2515C30.6247 10.7538 30.4274 10.2763 30.0758 9.92405C29.7242 9.57181 29.247 9.37368 28.7493 9.37324C28.2516 9.3728 27.7741 9.57009 27.4219 9.92171L20 17.3436L12.5781 9.92171C12.2259 9.56947 11.7482 9.37158 11.25 9.37158C10.7519 9.37158 10.2741 9.56947 9.92189 9.92171C9.56965 10.274 9.37177 10.7517 9.37177 11.2498C9.37177 11.748 9.56965 12.2257 9.92189 12.578L17.3438 19.9998L9.92189 27.4217C9.56965 27.7739 9.37177 28.2517 9.37177 28.7498C9.37177 29.248 9.56965 29.7257 9.92189 30.078C10.2741 30.4302 10.7519 30.6281 11.25 30.6281C11.7482 30.6281 12.2259 30.4302 12.5781 30.078L20 22.6561L27.4219 30.078C27.7741 30.4302 28.2519 30.6281 28.75 30.6281C29.2482 30.6281 29.7259 30.4302 30.0781 30.078C30.4304 29.7257 30.6283 29.248 30.6283 28.7498C30.6283 28.2517 30.4304 27.7739 30.0781 27.4217L22.6516 19.9998Z'
          fill='#5C5C5C'
        />
      </svg>

      <div
        onClick={(e) => e.stopPropagation()}
        className='flex h-screen w-80 cursor-auto flex-col items-center bg-white p-4'
      >
        <div className=''>
          <svg
            className='mx-auto'
            width='100'
            height='100'
            viewBox='0 0 301 261'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M137.5 0.25H162.5L167.267 23.6101C174.223 24.7171 180.959 26.4822 187.41 28.8395L204.5 11.75L226 25.25L218.962 46.8343C223.187 50.2903 227.148 54.0574 230.81 58.1004C230.27 57.9929 229.677 57.896 229.056 57.8072C226.859 57.4927 223.875 57.2174 220.613 56.9895C219.351 56.9014 218.039 56.8198 216.703 56.7454C199.007 40.8915 175.629 31.25 150 31.25C124.371 31.25 100.993 40.8915 83.2973 56.7454C81.9612 56.8198 80.6489 56.9014 79.3874 56.9895C76.1252 57.2174 73.1414 57.4927 70.9443 57.8072C70.3235 57.896 69.7295 57.9929 69.1896 58.1004C73.063 53.824 77.2711 49.8564 81.7726 46.239L74.0001 24.75L96.0001 11.75L112.956 28.7062C119.448 26.3607 126.226 24.6141 133.224 23.5331L137.5 0.25Z'
              fill='#132634'
            />
            <path
              d='M46.0628 98.3191C44.2233 104.13 42.8577 110.152 42.0113 116.34L18 120.75L18 146.25L42.5 150.75V149.374C43.7945 157.109 45.9036 164.568 48.7361 171.66L30.25 187.397L43 209.481L66.3708 201.162C70.9084 206.584 75.9634 211.558 81.4599 216.009L74.0832 236.734L96.1668 249.484L110.356 232.816C117.717 235.692 125.468 237.79 133.507 239.01L137.5 260.75H163L167.008 238.931C174.761 237.716 182.243 235.684 189.363 232.926L205.147 251.468L227.231 238.718L219.011 215.625C224.628 211.026 229.776 205.877 234.375 200.261L257.468 208.481L270.218 186.397L251.676 170.613C254.692 162.827 256.84 154.609 258 146.077V150.75L282.5 146.25V120.75L258 116.25V116.423C257.155 110.206 255.785 104.156 253.937 98.3191C253.479 102.187 250.568 105.304 246.803 106.069C248.89 114.114 250 122.552 250 131.25C250 186.478 205.228 231.25 150 231.25C94.7715 231.25 50 186.478 50 131.25C50 122.552 51.1104 114.114 53.1971 106.069C49.4318 105.304 46.5207 102.187 46.0628 98.3191Z'
              fill='#132634'
            />
            <path
              d='M161.203 179.414H154.734L151.078 182.367H161.203V185.039H148.406C147.352 185.812 146.859 186.727 146.859 187.852C146.859 189.82 148.336 190.875 151.148 190.875C153.398 190.875 155.297 189.82 156.844 187.57L160.008 189.68C157.898 192.984 154.312 194.602 150.867 194.602C146.086 194.602 142.711 192.281 142.711 188.625C142.711 187.359 143.133 186.094 144.047 185.039H139.969V182.367H146.156L149.883 179.414H139.969V176.742H152.695C153.82 175.688 154.242 174.773 154.242 173.789C154.242 172.031 152.625 170.836 150.375 170.836C148.195 170.836 146.438 172.031 145.102 174.141L141.867 171.961C143.836 168.867 146.93 167.18 150.445 167.18C155.297 167.18 158.391 169.641 158.391 173.227C158.391 174.492 157.969 175.758 157.195 176.742H161.203V179.414Z'
              fill='#132634'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M66.8274 64.6563C66.5133 66.3689 65.7836 67.9363 64.7468 69.25H68.7143C72.2967 69.25 75.4054 71.2787 76.954 74.25H122.674C123.797 71.8851 126.208 70.25 129 70.25H173C175.792 70.25 178.203 71.8851 179.326 74.25H223.046C224.595 71.2787 227.703 69.25 231.286 69.25H235.253C234.216 67.9363 233.487 66.3689 233.173 64.6563C232.729 64.8939 232.261 65.0439 231.908 65.1427C231.133 65.3596 230.135 65.5383 229.056 65.6928C226.859 66.0073 223.875 66.2826 220.613 66.5105C214.074 66.9672 206.169 67.25 200.663 67.25C195.147 67.25 190.099 66.9666 186.381 66.4938C184.543 66.2601 182.912 65.966 181.682 65.5961C181.089 65.4178 180.409 65.1704 179.816 64.802C179.415 64.5524 178 63.6046 178 61.75C178 59.8954 179.415 58.9476 179.816 58.698C180.409 58.3296 181.089 58.0821 181.682 57.9039C182.912 57.534 184.543 57.2399 186.381 57.0062C190.099 56.5334 195.147 56.25 200.663 56.25C206.169 56.25 214.074 56.5328 220.613 56.9895C223.875 57.2174 226.859 57.4927 229.056 57.8072C230.135 57.9617 231.133 58.1404 231.908 58.3573C232.272 58.4593 232.759 58.6156 233.214 58.8664C233.327 58.9283 233.475 59.0162 233.639 59.1358C235.112 55.1174 238.971 52.25 243.5 52.25C247.986 52.25 251.814 55.0626 253.318 59.0204C253.407 58.9451 253.488 58.882 253.557 58.8311C254.12 58.4163 254.76 58.142 255.295 57.9511C256.402 57.5564 257.837 57.2527 259.408 57.0158C262.597 56.5349 266.899 56.25 271.578 56.25C276.247 56.25 282.936 56.534 288.47 56.9925C291.229 57.221 293.773 57.4987 295.661 57.8192C296.584 57.9759 297.475 58.1629 298.186 58.3991C298.521 58.5103 298.995 58.6895 299.444 58.9826C299.715 59.1591 301 60.0268 301 61.75C301 63.4732 299.715 64.3409 299.444 64.5174C298.995 64.8105 298.521 64.9897 298.186 65.1009C297.475 65.3371 296.584 65.5241 295.661 65.6808C293.773 66.0013 291.229 66.279 288.47 66.5075C282.936 66.966 276.247 67.25 271.578 67.25C266.899 67.25 262.597 66.9651 259.408 66.4842C257.837 66.2473 256.402 65.9436 255.295 65.5489C254.834 65.3843 254.294 65.1577 253.794 64.8324C253.463 66.4764 252.748 67.9815 251.747 69.25H252.714C257.843 69.25 262 73.4074 262 78.5357C262 81.6916 259.442 84.25 256.286 84.25H254V97.25C254 102.221 249.971 106.25 245 106.25H243C238.367 106.25 234.552 102.75 234.055 98.25H226V100.25H199.649V100.365C199.67 100.508 199.694 100.681 199.719 100.879C199.791 101.436 199.877 102.212 199.935 103.096C200.039 104.699 200.101 107.285 199.462 109.556C198.255 113.841 196.31 116.223 193.505 118.824C191.483 120.699 189.461 122.444 186.348 123.46L208.919 165.415C209.331 166.181 209.596 167.086 209.467 168.067C209.337 169.061 208.844 169.806 208.343 170.317C207.867 170.802 207.327 171.136 206.923 171.36C206.608 171.534 206.259 171.702 206.006 171.824L206.004 171.824C205.94 171.855 205.882 171.883 205.833 171.907C205.798 171.924 205.758 171.944 205.714 171.966C205.29 172.177 204.448 172.597 203.551 172.714C202.24 172.885 200.986 172.447 199.971 171.402C199.154 170.561 198.483 169.252 197.973 168.224C197.788 167.851 197.61 167.483 197.433 167.118C197.042 166.311 196.659 165.52 196.231 164.735L173.804 123.61L172.656 123.489L172.81 122.913L172 124.316V135.25C172 138.564 169.314 141.25 166 141.25H160V153.02C171.089 157.094 179 167.748 179 180.25C179 196.266 166.016 209.25 150 209.25C133.984 209.25 121 196.266 121 180.25C121 167.748 128.911 157.094 140 153.02V141.25H134C130.686 141.25 128 138.564 128 135.25V125.372L127.314 124.08L127.319 124.099L124.567 124.395L102.05 164.474C101.619 165.243 101.234 166.015 100.839 166.805C100.661 167.163 100.48 167.525 100.293 167.892C99.7775 168.9 99.0962 170.189 98.2678 171.018C97.2411 172.044 95.995 172.456 94.7083 172.293C93.8186 172.181 92.9804 171.775 92.5502 171.567C92.5055 171.546 92.4652 171.526 92.4298 171.509C92.3793 171.485 92.3205 171.458 92.2555 171.428C91.9998 171.308 91.6477 171.144 91.3316 170.974C90.9266 170.757 90.383 170.43 89.9023 169.955C89.3969 169.455 88.885 168.712 88.7486 167.705C88.6137 166.71 88.8925 165.797 89.3133 165.038L112.313 123.538L112.314 123.537C109.958 122.487 108.261 120.981 106.572 119.39C103.789 116.769 101.871 114.377 100.682 110.086C100.053 107.818 100.114 105.231 100.217 103.621C100.274 102.734 100.359 101.955 100.43 101.397C100.455 101.194 100.479 101.018 100.5 100.874V100.25H79C77.223 100.25 75.6264 99.4775 74.5278 98.25H65.9451C65.4476 102.75 61.6326 106.25 57 106.25H55C50.0294 106.25 46 102.221 46 97.25V84.25H43.7143C40.5584 84.25 38 81.6916 38 78.5357C38 73.4074 42.1574 69.25 47.2857 69.25H48.2532C47.0711 67.7522 46.2883 65.9247 46.0653 63.928C45.6211 64.1986 45.158 64.3946 44.7562 64.5412C43.664 64.9399 42.2533 65.2451 40.715 65.4826C37.5914 65.9649 33.3829 66.25 28.8072 66.25C24.2424 66.25 17.7056 65.9658 12.2964 65.507C9.60057 65.2784 7.11095 65.0003 5.26102 64.6788C4.35741 64.5217 3.47987 64.3334 2.77628 64.0941C2.44485 63.9814 1.97157 63.7987 1.52415 63.4995C1.23781 63.3081 0 62.4399 0 60.75C0 59.0601 1.23781 58.1919 1.52415 58.0005C1.97157 57.7013 2.44485 57.5186 2.77628 57.4059C3.47987 57.1666 4.35741 56.9783 5.26102 56.8212C7.11095 56.4997 9.60057 56.2216 12.2964 55.993C17.7056 55.5342 24.2424 55.25 28.8072 55.25C33.3829 55.25 37.5914 55.5351 40.715 56.0174C42.2533 56.2549 43.664 56.5601 44.7562 56.9588C45.2848 57.1517 45.9195 57.43 46.4779 57.8513C46.616 57.9555 46.797 58.1053 46.9858 58.3022C48.6602 54.7267 52.2909 52.25 56.5 52.25C61.029 52.25 64.8882 55.1174 66.3614 59.1358C66.5249 59.0162 66.6733 58.9283 66.7856 58.8664C67.2411 58.6156 67.7281 58.4593 68.0921 58.3573C68.8665 58.1404 69.8648 57.9617 70.9443 57.8072C73.1414 57.4927 76.1252 57.2174 79.3874 56.9895C85.9264 56.5328 93.8308 56.25 99.3373 56.25C104.853 56.25 109.901 56.5334 113.619 57.0062C115.457 57.2399 117.088 57.534 118.318 57.9039C118.911 58.0821 119.591 58.3296 120.184 58.698C120.585 58.9476 122 59.8954 122 61.75C122 63.6046 120.585 64.5524 120.184 64.802C119.591 65.1704 118.911 65.4178 118.318 65.5961C117.088 65.966 115.457 66.2601 113.619 66.4938C109.901 66.9666 104.853 67.25 99.3373 67.25C93.8308 67.25 85.9264 66.9672 79.3874 66.5105C76.1252 66.2826 73.1414 66.0073 70.9443 65.6928C69.8648 65.5383 68.8665 65.3596 68.0921 65.1427C67.7392 65.0439 67.2707 64.8939 66.8274 64.6563ZM150 156.25C136.745 156.25 126 166.995 126 180.25C126 193.505 136.745 204.25 150 204.25C163.255 204.25 174 193.505 174 180.25C174 166.995 163.255 156.25 150 156.25ZM155 151.25V141.25H145V151.25H155ZM166 136.25C166.552 136.25 167 135.802 167 135.25V128.25H133V135.25C133 135.802 133.448 136.25 134 136.25H166ZM175 104.25C175 105.355 174.105 106.25 173 106.25H129C127.895 106.25 127 105.355 127 104.25V77.25C127 76.1454 127.895 75.25 129 75.25H173C174.105 75.25 175 76.1454 175 77.25V104.25ZM119.573 114.844C120.363 117.338 121 119.75 121 119.75C121 119.75 118.54 120.015 117 119.75C116.549 119.672 116.13 119.579 115.736 119.468C113.417 118.818 111.959 117.595 110 115.75C107.634 113.522 106.368 111.882 105.5 108.75C104.718 105.928 105.5 101.25 105.5 101.25V100.75H114.5C114.5 100.75 115.5 102.75 117 104.75C117.87 105.91 117.563 106.397 117.248 106.895C117.021 107.255 116.79 107.62 117 108.25C117.111 109.164 117.452 109.757 117.824 110.404C118.053 110.803 118.294 111.222 118.5 111.75C118.86 112.671 119.231 113.765 119.573 114.844ZM129 111.25C127.68 111.25 126.446 110.885 125.392 110.25H124.5L130.871 122.25H168.574L175.11 110.927C174.444 111.137 173.735 111.25 173 111.25H129ZM179 119.133C179 119.133 181.484 119.396 183.038 119.133C183.475 119.059 183.883 118.97 184.267 118.866C186.637 118.224 188.114 117.004 190.106 115.158C192.494 112.943 193.772 111.313 194.649 108.201C195.439 105.396 194.649 100.747 194.649 100.747V100.25H185.562C185.562 100.25 184.553 102.238 183.038 104.225C182.16 105.378 182.471 105.863 182.788 106.357C183.017 106.715 183.25 107.078 183.038 107.704C182.926 108.612 182.582 109.201 182.207 109.845C181.976 110.241 181.732 110.658 181.524 111.182C181.164 112.089 180.793 113.165 180.45 114.227C179.648 116.716 179 119.133 179 119.133ZM119.973 100.25H122V103.428C121.707 102.766 121.341 102.205 121 101.75C120.62 101.243 120.272 100.725 119.973 100.25ZM72.2857 76.1659C72.737 76.8447 73 77.6595 73 78.5357C73 78.9302 72.6802 79.25 72.2857 79.25H43.7143C43.3198 79.25 43 78.9302 43 78.5357C43 77.6595 43.263 76.8447 43.7143 76.1659C44.1538 75.5048 44.7721 74.9727 45.5 74.6386C46.0436 74.3891 46.6484 74.25 47.2857 74.25H68.7143C69.3516 74.25 69.9564 74.3891 70.5 74.6386C71.2279 74.9727 71.8462 75.5048 72.2857 76.1659ZM73 93.25H67V85.25H73V93.25ZM79 95.25C78.4477 95.25 78 94.8023 78 94.25V79.25H118V95.25H79ZM61 84.25V97.25C61 99.4591 59.2091 101.25 57 101.25H55C52.7909 101.25 51 99.4591 51 97.25V84.25H61ZM56.5 68.25C59.5376 68.25 62 65.7876 62 62.75C62 59.7124 59.5376 57.25 56.5 57.25C53.4624 57.25 51 59.7124 51 62.75C51 65.7876 53.4624 68.25 56.5 68.25ZM41.596 62.2837C41.8756 62.2282 42.1404 62.1708 42.3894 62.1117C44.0407 61.7199 45 61.2523 45 60.75C45 60.2477 44.0407 59.7801 42.3894 59.3883C42.1404 59.3292 41.8756 59.2718 41.596 59.2163C38.6332 58.6283 34.0064 58.25 28.8072 58.25C23.5346 58.25 15.5085 58.6391 9.80858 59.2414C8.28257 59.4027 6.92329 59.5792 5.8282 59.7676C4.07586 60.0692 3 60.4013 3 60.75C3 61.0987 4.07586 61.4308 5.8282 61.7324C6.92329 61.9208 8.28257 62.0973 9.80857 62.2586C15.5085 62.8609 23.5346 63.25 28.8072 63.25C34.0064 63.25 38.6332 62.8717 41.596 62.2837ZM114.935 63.2724C115.438 63.1892 115.9 63.102 116.319 63.011C118.023 62.6408 119 62.2099 119 61.75C119 61.2901 118.023 60.8592 116.319 60.489C115.9 60.398 115.438 60.3108 114.935 60.2276C111.341 59.6331 105.691 59.25 99.3373 59.25C92.925 59.25 83.1589 59.6403 76.2355 60.2442C74.1172 60.429 72.265 60.6338 70.8564 60.8535C69.0724 61.1318 68 61.434 68 61.75C68 62.066 69.0724 62.3682 70.8564 62.6465C72.265 62.8662 74.1172 63.071 76.2355 63.2558C83.1589 63.8597 92.925 64.25 99.3373 64.25C105.691 64.25 111.341 63.8669 114.935 63.2724ZM257.62 63.0995C257.888 63.1623 258.174 63.2232 258.477 63.282C261.51 63.871 266.25 64.25 271.578 64.25C276.978 64.25 285.197 63.8608 291.033 63.2582C292.623 63.094 294.036 62.914 295.167 62.7217C296.924 62.423 298 62.0946 298 61.75C298 61.4054 296.924 61.077 295.167 60.7783C294.036 60.586 292.623 60.406 291.033 60.2418C285.197 59.6392 276.978 59.25 271.578 59.25C266.25 59.25 261.51 59.629 258.477 60.218C258.174 60.2768 257.888 60.3377 257.62 60.4005C255.962 60.7898 255 61.2529 255 61.75C255 62.2471 255.962 62.7102 257.62 63.0995ZM296.361 64.1166C296.368 64.1199 296.372 64.1215 296.372 64.1215C296.372 64.1214 296.373 64.1217 296.372 64.1215L296.369 64.1199L296.361 64.1166ZM221 95.25V79.25H181V94.25C181 94.8023 181.448 95.25 182 95.25H221ZM239 84.25H249V97.25C249 99.4591 247.209 101.25 245 101.25H243C240.791 101.25 239 99.4591 239 97.25V84.25ZM256.286 79.25H227.714C227.32 79.25 227 78.9302 227 78.5357C227 77.6595 227.263 76.8447 227.714 76.1659C228.154 75.5048 228.772 74.9727 229.5 74.6386C230.044 74.3891 230.648 74.25 231.286 74.25H252.714C253.352 74.25 253.956 74.3891 254.5 74.6386C255.228 74.9727 255.846 75.5048 256.286 76.1659C256.737 76.8447 257 77.6595 257 78.5357C257 78.9302 256.68 79.25 256.286 79.25ZM185.065 63.2724C184.562 63.1892 184.1 63.102 183.681 63.011C181.977 62.6408 181 62.2099 181 61.75C181 61.2901 181.977 60.8592 183.681 60.489C184.1 60.398 184.562 60.3108 185.065 60.2276C188.659 59.6331 194.309 59.25 200.663 59.25C207.075 59.25 216.841 59.6403 223.764 60.2442C225.883 60.429 227.735 60.6338 229.144 60.8535C230.928 61.1318 232 61.434 232 61.75C232 62.066 230.928 62.3682 229.144 62.6465C227.735 62.8662 225.883 63.071 223.764 63.2558C216.841 63.8597 207.075 64.25 200.663 64.25C194.309 64.25 188.659 63.8669 185.065 63.2724ZM243.5 68.25C240.462 68.25 238 65.7876 238 62.75C238 59.7124 240.462 57.25 243.5 57.25C246.538 57.25 249 59.7124 249 62.75C249 65.7876 246.538 68.25 243.5 68.25ZM233 85.25H227V93.25H233V85.25ZM115.973 127.25H117.228L97.6912 162.026C97.1969 162.905 96.7195 163.862 96.3026 164.697C96.1383 165.026 95.9835 165.336 95.8407 165.616C95.4475 166.385 95.1628 166.881 94.9657 167.177L94.9413 167.166C94.9068 167.15 94.873 167.134 94.8385 167.118C94.7913 167.096 94.7429 167.073 94.69 167.048L94.5702 166.991C94.464 166.94 94.3692 166.896 94.2823 166.855L94.1741 166.805L94.0763 166.759L115.973 127.25ZM182.44 126.75L204.177 167.153L204.123 167.18C204.082 167.2 204.041 167.22 203.998 167.241L203.876 167.299C203.801 167.335 203.72 167.374 203.64 167.414L203.52 167.472C203.443 167.51 203.375 167.543 203.306 167.576C203.109 167.268 202.831 166.765 202.452 166.002C202.31 165.715 202.156 165.398 201.993 165.062C201.58 164.21 201.109 163.237 200.62 162.341L181.211 126.75H182.44Z'
              fill='#132634'
            />
          </svg>
        </div>
        <div className='mt-5 flex w-full flex-1 flex-col items-center gap-4'>
          <NavBtn
            to='/dashboard/profile'
            className={'max-w-56'}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Профіль
          </NavBtn>
          <NavBtn
            to='/dashboard/organisation'
            className={'max-w-56'}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Організація
          </NavBtn>
          <NavBtn
            to='/dashboard/follows'
            className={'max-w-56'}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Підписки
          </NavBtn>
        </div>
        {profile?.access_token ? (
          <NavBtn
            to='/auth'
            className={'max-w-56'}
            onClick={() => {
              setProfile({});
              setMenuOpen(false);
            }}
          >
            Вихід з аккаунту
          </NavBtn>
        ) : (
          <NavBtn to='/auth' className={'max-w-56'}>
            Авторизація
          </NavBtn>
        )}
      </div>
    </div>
  );
}
