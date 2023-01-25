
import { Link } from 'react-router-dom'
import axios from '../api/axios';
const Candidates = () => {
    async function handleImage() {
        await axios.post('http://localhost/imageretrive.php');
    }
    return ( 
        <div className="can-container">
            <div className="can-person">
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' >{handleImage}</button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
            </div>
            <div className="can-person">
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
            </div>
            <div className="can-person">
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
                <Link to={'/Fingerprint'}>
                    <button className='can-btn-temp' ></button>
                    <h2>Title and year</h2>
                </Link>
            </div>
        </div>
     );
}
 
export default Candidates;