import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
const EmailVerification = () => {
    const [verification_code,setVerification_code] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let fData = new FormData();
            fData.append('verification_code', verification_code);
        axios.post('http://localhost:80/email-verification.php',fData)
        .then(response=> 
            alert(response.data))
        .catch(error=> alert(error.response.data));
    }
    return ( 
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <input  type="hidden" 
                        value="<?php echo $_GET['email']; ?>" 
                        required/>
                <input  type="text" 
                        name="verification_code" 
                        placeholder="Enter verification code"
                        value={verification_code}
                        onChange={(e) => setVerification_code(e.target.value)} 
                        required />

                <input type="submit" name="verify_email" value="Verify Email"/>
            </form>
        </div>
     );
}
 
export default EmailVerification;