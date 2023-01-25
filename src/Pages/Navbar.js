import '../styles/Navbar.css'
import image from '../images/download.png' 
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='Navbar-container'>
            <div className="navbar-logo">
                <Link to={'/'}><img src={image} alt="NEBE" /></Link>
            </div>
            <div className="navbar-pages">
                <ul>
                    <Link to={'./Register'}><li>Register</li></Link>
                    <Link to={'./Candidates'}><li>Candidates</li></Link>
                    <Link to={'./Results'}><li>Result</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;