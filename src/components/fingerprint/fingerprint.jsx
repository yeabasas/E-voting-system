import { Link } from "react-router-dom";
import Confirm from "../Confirm";
const FingerPrint = () => {
    return ( 
        <Link to={'../Success'}>
            <div className="flex mt-28 items-center justify-center  text-6xl">
                Please scan your finger print
            </div>
        </Link>
     );
}
 
export default FingerPrint;