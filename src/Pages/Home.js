import { Link } from 'react-router-dom'

const Home = () => {
   
    return ( 
        <div className='home-container'>
            <div className="ho-me">
                <h1>This Is Official Ethiopian National Election Website</h1>
            </div>
            <div className="page-nav">
                <ul>
                    <li><Link to={'/Login'}>
                         <button className='register-btn-temp' ></button>
                        <h2>Register</h2></Link>
                    </li>
                    <li><Link to={'/Candidates'}>
                        <button className='candidate-btn-temp'></button>
                        <h2>Candidates</h2></Link>
                    </li>
                    <li><Link to={'/Results'}>
                        <button className='result-btn-temp'></button>
                        <h2>Results</h2></Link>
                    </li>
                </ul>
            </div>
        </div>
        
     );
}
 
export default Home;