import logo from "../assets/image/logo.png";
import { Link, useHistory } from "react-router-dom";

const ComHeader = () => {
    const history = useHistory();
    return ( 
        <div className="w-[98%] h-[12%] shadow-xl flex justify-between rounded-md">
        <img
            src={logo}
            alt="National Election Board of Ethiopia"
            className="w-fit h-16 object-cover cursor-pointer"
            onClick={() => {
            history.push("/");
            }}
        />
        <div className="text-lg font-medium text-blue-700">
            <Link>Register</Link>
            <Link>Candidates</Link>
            <Link></Link>
        </div>
        </div>
     );
}
 
export default ComHeader;