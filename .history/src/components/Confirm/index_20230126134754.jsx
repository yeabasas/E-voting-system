import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Confirm = () => {
    const { features } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
        <div className="w-full flex items-center justify-evenly">
        h
        <Link
            to={features.Birhanu}
            className="w-fit h-fit flex flex-col items-center gap-2 rounded-md shadow-2xl pb-2 cursor-pointer"
          >
            <img
              className="w-48 h-48 object-cover"
              src={features.icon}
              alt="Register"
            />
            <div className="text-lg font-semibold">{features.title}</div>
          </Link>
        </div>
    </div>
    );
    
}
 
export default Confirm;