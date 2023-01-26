import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Confirm = () => {
    const { features } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
        <div className="w-full flex items-center justify-evenly">
           <Linkto={feature.path}
            key={idx}
            className="w-fit h-fit flex flex-col items-center gap-2 rounded-md shadow-2xl pb-2 cursor-pointer"
          >
            {features.}
           </Link>
        </div>
    </div>
    );
    
}
 
export default Confirm;