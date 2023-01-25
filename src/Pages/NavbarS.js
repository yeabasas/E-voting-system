import '../styles/NavbarS.css'
import { Link } from 'react-router-dom'
import image from '../images/download.png'
const NavbarS = () => {
    return ( 
        <div className='Navbar-containers'>
            <Link to={'/'}>
                <img src={image} alt="NEBE" />
                <h2>National Election Board of Ethiopia </h2>
            </Link>
        </div>
     );
}
 
export default NavbarS;