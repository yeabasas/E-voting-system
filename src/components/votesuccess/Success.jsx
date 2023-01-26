import { Link } from 'react-router-dom';

const Success = () => {
    return ( 
        <div>
            
            <div className="flex flex-col mt-28 items-center justify-evenly text-3xl">
                    voted
            </div>
            <div className="flex flex-col items-center justify-evenly text-blue-600 text-6xl">
                    Successfully!
            </div>
            <div className="mt-5  flex flex-row items-center justify-center text-xl">
                <div className="text-xl">
                    The result will be announce on 
                </div>
                <div className="text-2xl m-1 text-blue-600">
                     dd/mm/yyyy
                </div>
                <div className="text-xl">
                     ,Please hold back! 
                </div>
            </div>
            
            <Link to={'/'}>
            
            <div className="mt-5 flex flex-col items-center justify-evenly text-blue-400 text-xl">
                    Go back to home
            </div>
            </Link>
        </div>
     );
}
 
export default Success;