import { useState } from "react";
import NextButton from "../reusableComponents/Button";
import Input from "../reusableComponents/inputfield";
import { useUserAuth } from "../../utils/services";
import { useRouter } from "next/router";
import Link from "next/link";
import { Divider } from "@mui/material";


const Login = () => {

  const { logIn, user } = useUserAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const submit = async () => {
      try {
        await logIn(email, password);
        router.push('/profile'); 
      } catch (error) {
        console.log(error.message);
      }
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
    
    return ( <>
    <div className=" pb-10 pt-10">
  
    <h3 className="mb-2">LOGIN </h3>
<div className="mb-5"> 
    <Input type="email"  onChange={handleEmailChange} value={email}/>
    <Input type="password" onChange={handlePasswordChange}  value={password}/></div>
    <NextButton onNextClick={submit} title={"LOGIN"} />
    </div>

    <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-2 text-gray-500">Or</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
   
    <div className="flex gap-2 mt-5"> 
       <p>not a user? </p> 
    <Link className="underline" href="/profile/signup">
   sign up here
      </Link></div>
  
    </> )
}
 
export default Login;