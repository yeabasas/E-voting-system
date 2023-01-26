import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
      
      <div className="flex flex-col items-center justify-evenly text">
              voted Successfully
      </div>
      <div className="flex flex-col items-center justify-evenly text">
              voted Successfully
      </div>
    
    );
    
}
 
export default Confirm;