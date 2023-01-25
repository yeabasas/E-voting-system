import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import {Link} from 'react-router-dom'
import axios from '../api/axios';
import { useHistory } from "react-router-dom";
// const LOGIN_URL = '/auth';

const Login = () => {
    let navigate = useHistory();
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
       e.preventDefault();

        try {
            let fData = new FormData();
            fData.append('password', pwd);
            fData.append('name', user);
            const response = await axios.post('http://localhost/loginn.php')
            .then(response=> 
                alert(response.data))
            .catch(error=> alert(error.response.data));
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/">Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form className='form-reg' name='login' onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <a href="/Register">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login



























// import { useState } from "react";
// import axios from 'axios'
// // import $ from "jquery";
// import { Link } from 'react-router-dom'
// import "../styles/Signin.css";
// const Login = () => {
//     const [password,setPassword] = useState('');
//     const [name,setEmail] = useState('');
//     const [Submit,setSubmit] = useState('');
//     const handleSubmit = (e) => {
//         // e.preventDefault();
//           const url = 'http://localhost:8000/register.php';
//           let fData = new FormData();
//           fData.append('password', password);
//           fData.append('name', name);
//           axios.post(url, fData)
//           .then(response=> 
//             alert(response.data))
//           .catch(error=> alert(error.response.data));
        
//     }
//     return ( 
//         <div className="Login">
//             <div className="message text-center">
//             </div>
//             <form onSubmit={handleSubmit()}>
//                  <h1>Log In</h1>
//                  <div className="Log-in">
//                     <input 
//                         type="email"
//                         name="name"
//                         value={name}
//                         required
//                         placeholder="Email"
//                         onChange={(e)=>setEmail(e.target.value)}
//                     />
//                     <input 
//                         type="password"
//                         name="password"
//                         value={password}
//                         required
//                         placeholder="Password"
//                         onChange={(e)=> setPassword(e.target.value)}
//                     />
//                 </div>
//                 <Link><button>Login</button></Link>
//                     <p>Don't have an account?</p>
//                 <Link to={"/Register"}>
//                     <p><b>Sign Up</b></p>
//                 </Link>
//             </form>
            
//         </div> 
//     );
//     // const [name, setName] = useState("");
//     // const [result, setResult] = useState("");
  
//     // const handleChange = (e) => {
//     //     setName(e.target.value);
//     // };
  
//     // const handleSumbit = (e) => {
//     //     e.preventDefault();
//     //     const form = $(e.target);
//     //     $.ajax({
//     //         type: "POST",
//     //         url: form.attr("action"),
//     //         data: form.serialize(),
//     //         success(data) {
//     //             setResult(data);
//     //         },
//     //     });
//     // };
  
//     // return (
//     //     <div className="App">
//     //         <form
//     //             action="http://localhost:8000/server.php"
//     //             method="post"
//     //             onSubmit={(event) => handleSumbit(event)}
//     //         >
//     //             <label htmlFor="name">Name: </label>
//     //             <input
//     //                 type="text"
//     //                 id="name"
//     //                 name="name"
//     //                 value={name}
//     //                 onChange={(event) => handleChange(event)}
//     //             />
//     //             <br />
//     //             <button type="submit">Submit</button>
//     //         </form>
//     //         <h1>{result}</h1>
//     //     </div>
//     // );
// }
 
// export default Login;