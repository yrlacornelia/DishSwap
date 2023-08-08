import NextButton from "../reusableComponents/Button";
import { handleLogOut } from "../../utils/services";
const Logout = () => {
const out = () => {
handleLogOut()

}
    return ( 
        <NextButton onNextClick={out} title={"logout"}/>
     );
}
 
export default Logout;