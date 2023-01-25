import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import {Link } from 'react-router-dom'
import '../styles/styleof.css'
import { useHistory } from 'react-router-dom';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const emailRef = useRef();

    const history = useHistory();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    // const [finger, setFinger] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        } 
        try {
            let fData = new FormData();
            fData.append('password', pwd);
            fData.append('name', user);
            axios.post('http://localhost/server.php',fData)
            .then(response=> 
                alert(response.data))
            .catch(error=> alert(error.response.data));
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <>
                </>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form method = 'POST' action="register.php" className="form-reg" onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            name="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            Must match the first password input field.
                        </p>

                        <button type="submit" name="register" onSubmit={() => history.push('/EmailVerification')} disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <Link to="/Login">Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register






























// import {Link} from 'react-router-dom'
// const Register = () => {
//     return ( 
//         <div className="reg-container">
//             <h2>Registration Form for National Election of Ethiopia </h2>
//             <div className="reg-form-container">
//                 <form className="reg-form">
//                     <div className="reg-form-name">
//                         <input type="text"
//                         className="FirstName"
//                         placeholder="First Name" />
//                         <input type="text"
//                         className="MiddleName"
//                         placeholder="Middle Name" />
//                         <input type="text"
//                         className="LastName"
//                         placeholder="Last Name" />
//                     </div>
//                     <div className="reg-citizenship">
//                         <input type="text"
//                         className="nationality "
//                         placeholder="Nationality" />
//                         <input type="text"
//                         className="gender"
//                         placeholder="Gender" />
//                     </div>
//                     <div className="reg-address">
//                         <input type="text"
//                         className="streetAddress"
//                         placeholder="Street Address" />
//                         <input type="text"
//                         className="city"
//                         placeholder="City" /><br/>
//                         <input type="text"
//                        className="kebele"
//                         placeholder="Kebele" />
//                         <input type="text"
//                         className="sub-city"
//                         placeholder="Subcity" />
//                         <input type="number"
//                         className="duration"
//                         placeholder="Duration of Residence" />
//                     </div>
//                     <div className="date-of-birth">
//                         <input type="date"
//                         className="birthdate"
//                         placeholder="Date of Birth" />
//                     </div>
//                 </form>
//                 <Link to={"/RegConfirm"}><button>Submit</button></Link>
//             </div>
//             <h3 className="reg-footer">
//                 The decision to register to vote is yours. 
//                 If you decide to register to vote, the office 
//                 at which you are submitting this application will 
//                 remain confidential and will be used only for voter 
//                 registration purposes. If you decline to register to vote,
//                 your decision will remain confidential and will be used only for voter registration purposes.
//             </h3>
//         </div>
//      );
// }
 
// export default Register;