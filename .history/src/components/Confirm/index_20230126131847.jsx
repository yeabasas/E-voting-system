import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Confirm = () => {
    const { features } = useSelector((state) => state.setting);
  return (
    <div className="flex justify-center rounded-md my-9">
        <div className="w-full flex items-center justify-evenly">
        <a href={this.state.data[0].fo}>{this.state.data[0].bar}</a>
        </div>
    </div>
    );
    
}
 
export default Confirm;