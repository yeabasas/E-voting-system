import {Link} from 'react-router-dom'
const Fingerprint = () => {
    return ( 
        <div className="fin-container">
            <Link to={'/Confirmation'}><h1>Please Scan Your Fingerprint</h1></Link>
        </div>
     );
}
 
export default Fingerprint;