import { Link } from 'react-router-dom';

const Success = () => {
    return ( 
        <div className="flex flex-col mt-28 items-center justify-evenly text-3xl">
                voted
        </div>
        <div className="flex flex-col items-center justify-evenly text-blue-600 text-6xl">
                Successfully!
        </div>
        <Link to={'/'}>
        
        <div><div className="mt-5 flex flex-col items-center justify-evenly text-blue-400 text-xl">
                The result will be announce on dd/mm/yyyy, Please hold back! 
        </div>
        <div className="mt-5 flex flex-col items-center justify-evenly text-blue-400 text-xl">
                Go back to home
        </div>
        </Link>
      </div>
     );
}
 
export default Success;