import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
      <div>
        <div className="flex flex-col mt-56 items-center justify-evenly text-3xl">
                voted
        </div>
        <div className="flex flex-col items-center justify-evenly text-blue-600 text-6xl">
                Successfully!
        </div>
        <div className="flex flex-col items-center justify-evenly text-xl">
                Go back to home
        </div>
        <Link to={'/'}>
        <div className="flex flex-col items-center justify-evenly text-blue-600 text-xl ">
                home
        </div>
        </Link>
      </div>
    );
    
}
 
export default Confirm;