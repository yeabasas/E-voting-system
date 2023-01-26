import { useSelector } from "react-redux";

const Confirm = () => {
    const { features } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
        <div className="w-full flex items-center justify-evenly">
        
        </div>
    </div>
    );
    
}
 
export default Confirm;