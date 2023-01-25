import '../index.css'
import {Link} from 'react-router-dom'
const Confirmation = () => {
    return ( 
        <div className="conf-page">
            <h2>You Voted For</h2>
            <div className="conf-choosed">
                <button className='can-btn-temp'></button>
            </div>
                <Link to='/Terminal'><button className='conf-btn'>Confirm</button></Link>
        </div>
        
        
     );
}
 
export default Confirmation;