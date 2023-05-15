const MobileMenu = () => {
  return (
    <div className=' text-white dark:text-gray-300 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state'>
      <span className='sr-only'>Open menu</span>
      <svg width='24' height='24' fill='none' viewBox='0 0 24 24'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M4.75 5.75H19.25'
        ></path>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M4.75 18.25H19.25'
        ></path>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M4.75 12H19.25'
        ></path>
      </svg>
    </div>
  );
};

export default MobileMenu 
