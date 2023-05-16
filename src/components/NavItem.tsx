import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, text }: { href: any, text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href} className={` xl:ml-0 ${isActive
      ? 'font-bold text-white'
      : 'font-normal text-gray-200 dark:text-gray-400'
      } 'hidden md:inline-block p-1 sm:px-4 sm:py-2 rounded-full hover:text-black hover:bg-gray-100 dark:hover:bg-midnight transition-all`}>

      <span
        className={`${isActive
          ? 'py-1 border-b-2 border-teal-400 dark:border-teal-500'
          : 'capsize'
          } `}
      >
        {text}
      </span>

    </NextLink>
  );
};

export default NavItem