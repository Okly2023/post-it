import {auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () =>{
        const result = await signInWithPopup(auth, provider);
         console.log( result);
         navigate("/main")
    }
    return(
        <div className="log">
            <div className="Sign">
              <h1>Post-it</h1>
              <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
        </div>
    );
};