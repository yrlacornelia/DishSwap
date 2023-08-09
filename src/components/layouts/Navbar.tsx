import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='flex flex-row border border-gray-300 w-full flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='w-4/12 '></div>
        <div className='w-4/12 flex justify-center' > <Image
            src={"/images/logo.svg"}
            width={150}
            height={150}
            alt={"logga"}
          /></div>
        <div className='w-4/12 m-auto'> 
        <ul className='flex flex-row justify-end gap-8'>
        <li>
          <Link href="/" passHref={true} legacyBehavior={true}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/friends" passHref={true} legacyBehavior={true}>
            <a>vänner</a>
          </Link>
        </li>
        <li>
          <Link href="/likes" passHref={true} legacyBehavior={true}>
            <a>likes</a>
          </Link>
        </li>
        <li>
          <Link href="/profile" passHref={true} legacyBehavior={true}>
            <a>min profil</a>
          </Link>
        </li>
      </ul></div>
     
    </nav>
  );
};

export default Navbar;
