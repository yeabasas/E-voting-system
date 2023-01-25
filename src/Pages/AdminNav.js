import image from '../images/download.png' 
import { Link } from 'react-router-dom'
import '../styles/Admin.css'
const AdminNav = () => {
    return ( 
        <div className="admin-nav-cont">
            <div className="admin-nav-logo">
                <Link to={'/'}><img src={image} alt="NEBE" /></Link>
            </div>
            <div className="admin-nav-pages">
                <ul>
                    <Link to={'./Admin'}><li>Election Detail</li></Link>
                    <Link to={'./AddCandidates'}><li>Add Candidates</li></Link>
                    <Link to={'./AdminResults'}><li>Result</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default AdminNav;