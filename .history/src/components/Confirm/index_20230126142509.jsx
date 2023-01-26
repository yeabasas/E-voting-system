import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import features from '../../utils/contestants'
const Confirm = () => {
    const { feature } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
      <div className="w-full flex items-center justify-evenly">
        mnb
      
      </div>
    </div>
    );
    
}
 
export default Confirm;