import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
      <div>
        <div className="flex flex-col items-center justify-evenly text-5xl">
                voted
        </div>
        <div className="flex flex-col items-center justify-evenly text-9xl">
                Successfully
        </div>
      </div>
    );
    
}
 
export default Confirm;