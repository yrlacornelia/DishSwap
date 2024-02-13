// import { useRouter } from "next/router";
// import { useUserAuth } from "../../utils/services";
// import NextButton from "../reusableComponents/Button";
// const Logout = () => {
//     const { logOut, user } = useUserAuth();
//     const router = useRouter();
//     const handleLogout = async () => {
//       try {
//         await logOut();
//         router.push('/login'); 
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     return ( 
//         <NextButton onNextClick={handleLogout} title={"logout"}/>
        
//      );
// }
 
// export default Logout;