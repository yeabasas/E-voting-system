import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Confirm = () => {
    const { features } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
        <div className="w-full flex items-center justify-evenly">
           <Link>
            {s}
           </Link>
        </div>
    </div>
    );
    
}
 
export default Confirm;