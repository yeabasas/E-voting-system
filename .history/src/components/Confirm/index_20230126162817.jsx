import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
      <div className="w-full flex flex- items-center justify-evenly">
              voted Successfully
      </div>
    
    );
    
}
 
export default Confirm;