import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
      <div>
        <div className="flex flex-col items-center justify-evenly text-">
                voted
        </div>
        <div className="flex flex-col items-center justify-evenly text">
                Successfully
        </div>
      </div>
    );
    
}
 
export default Confirm;