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
// import { useState, useEffect } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// import Link from "next/link";

// import Image from "next/image";
// export default function Example() {
//   const [openNav, setOpenNav] = useState(false);
//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className=" mb-4 mt-2 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16 ">
     
//     </ul>
//   );

//   return (
//     <Navbar className=" min-w-full p-0 lg:py-4 shadow-none ">
//       <div className="container px-8 max-w-none flex items-center justify-between text-blue-gray-900 ">
//         <Typography
//           as="a"
//           href="/"
//           variant="small"
//           className="mr-4 cursor-pointer py-1.5 font-normal"
//         >
//           <Image
//             src={"/images/logos/logga.svg"}
//             width={50}
//             height={50}
//             alt={"logga"}
//           />
//         </Typography>
//         <div className="hidden lg:block ">{navList}</div>
//         <IconButton
//           variant="text"
//           className="mr-0 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         <div className="min-h-screen border  border-2 text-center p-8 text-xl ">
//           {navList}
//         </div>
//       </MobileNav>
//     </Navbar>
//   );
// }
