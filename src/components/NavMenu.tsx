import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import NextLink from 'next/link';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';
import { useRouter } from 'next/router';

export const navItems = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About Us',
  },
  {
    href: '/events',
    text: 'Event',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
  {
    href: '/ourteam',
    text: 'Our Team',
  },
  {
    href: '/sponsors',
    text: 'Sponsors',
  }
];

const NavMenu = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [userPaid, setUserPaid] = useState(false)
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(true);
  };


  let user: any;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user') as string)
      if (user) {
        setEmail(user.email)
      }
    }
    if (user?.paymentStatus === 'PAID') {
      setUserPaid(true);
    }

  }, [])

  return (
    <div className=' text-white'>
      <div
        className='flex items-center justify-between max-w-6xl lg:max-w-[72rem] xl:max-w-6xl px-4 py-6 mx-auto sm:px-6
       '
      >
        <div className='flex justify-start lg:w-0  transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold cursor-pointer  '>
          <span className='sr-only'>Logo</span>
          <NextLink href='/' passHref>
            {/* <motion.a
              className='group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold'
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
            > */}
            {/* <div className=' transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold cursor-pointer '> */}
            <span className=' opacity-100 hover:text-lightGreen dark:hover:text-lightGreen '>
              YENSPLASH
            </span>
            {/* </div> */}
            {/* </motion.a> */}
          </NextLink>
        </div>
        <div className='-my-2 -mr-2 lg:hidden' onClick={() => handleClick()}>
          <MobileMenu />
        </div>
        <nav className='hidden space-x-6 text-lg justify-center   lg:flex '>
          {navItems.map(({ href, text }, index) => (
            <NavItem href={href} text={text} />
          ))}
          <>
            {email && !userPaid || userPaid ? (
              <form action="https://yensplah-payment-backend.onrender.com/api/payment/checkout_sessions" method="POST" className='sm:hidden hidden  lg:block bg-[#EACD69] hover:bg-white text-black font-bold py-2 px-4 rounded-full' >
                {/* <ThemeToggle /> */}
                <input type="hidden" name="email" value={email} />
                <button type="submit" role="link">
                  Buy Tickets
                </button>
              </form>
            ) : <NextLink href={'/login'} className='sm:hidden hidden  lg:block  bg-[#EACD69] hover:bg-white text-black font-bold py-2 px-4 rounded-full' >

              <h1>Login</h1>
            </NextLink>}

          </>
        </nav>


      </div>
      {
        isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className='fixed inset-0 z-50 lg:hidden'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80' />

            <div className='fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
              >
                <span className='sr-only'>Close navigation</span>
                <svg
                  viewBox='0 0 10 10'
                  className='w-2.5 h-2.5 overflow-visible'
                  aria-hidden='true'
                >
                  <path
                    d='M0 0L10 10M10 0L0 10'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  ></path>
                </svg>
              </button>
              <ul className='space-y-6'>
                {navItems.map(({ href, text }) => (
                  <li>
                    <NextLink href={{ pathname: href, query: { showNav: text !== 'Home' ? true : false } }}>
                      <p className='hover:text-lightGreen dark:hover:text-emerald-500'>
                        {text}
                      </p>
                    </NextLink>
                  </li>
                ))}
                <li>
                  {email && !userPaid || userPaid ? (
                    <form action="https://yensplah-payment-backend.onrender.com/api/payment/checkout_sessions" method="POST" >
                      <input type="hidden" name="email" value={email} />
                      <button type="submit" role="link" className='hover:text-lightGreen dark:hover:text-emerald-500 bg-[#EACD69] hover:text-white text-black font-bold py-2 px-4 rounded-full text-center'>
                        Buy tickets
                      </button>
                    </form>
                  ) : (
                    <NextLink href='/login'>
                      <p className='hover:text-lightGreen dark:hover:text-emerald-500 bg-[#EACD69] hover:text-white text-black font-bold py-2 px-4 rounded-full text-center'>
                        Login
                      </p>
                    </NextLink>
                  )}

                </li>
              </ul>
            </div>
          </Dialog>
        )
      }
    </div >
  );
};

export default NavMenu; 
