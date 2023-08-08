import { useState } from "react";
import NextButton from "../reusableComponents/Button";
import Input from "../reusableComponents/inputfield";
import { handleSignUp } from "../../utils/services";
const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const submit = () => {
handleSignUp(email, password)
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
    
    return ( <>
    <p>sign up here</p>
    <Input type="email"  onChange={handleEmailChange} value={email}/>
    <Input type="password" onChange={handlePasswordChange}  value={password}/>
    <NextButton onNextClick={submit} title={"login"} />

    </> )
}
 
export default SignUp;