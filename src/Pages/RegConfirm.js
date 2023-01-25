import { Link } from 'react-router-dom'

const RegConfirm = () => {
    return ( 
        <div className="conf-page">
            <h3>Registered</h3>
            <h1>Successfully!!</h1>
            <p>Go to 
                <Link to="/Candidates">
                    <b className="conf-link">
                        Candidates
                    </b> 
                </Link>and start voting.
            </p>
        </div>
     );
}
 
export default RegConfirm;