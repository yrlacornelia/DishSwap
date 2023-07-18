import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
