import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Bee from "../components/Bee";

export default () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [hasError,setHasError] = useState(false);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log(auth.currentUser);
  //   if (auth.currentUser){
  //     navigate("/overview/index");
  //   }
  // },[])

  const loginHandler = async(email,password)=> {
    try {
      const user = await signInWithEmailAndPassword(auth,email, password);
      // navigate("/overview/index");
    } catch (error) {
      setHasError(true);
    }
  }
  return (
    <div style={{
      backgroundColor: "#161616",
      width: "100vw",
      height: "100vh",
    }}>
      <Bee className="IBM-bee"/>
      <p className="IBM-name">IBM's</p>
      <p className="SkillHive-name">SkillHive</p>
      <div className="SignIn-Box">
        <p className="SignIn-Text">Sign In</p>
        <form>
          <label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder=" email@ibm.com" className="Email-box" />
          </label>
          <label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" placeholder=" password" className="Password-box" />
          </label>
          {hasError&&<p className="Incorrect-user">Try again</p>}
          <button className="Continue-button" onClick={(e)=>{
            e.preventDefault();
            loginHandler(email,password);
          }} > Continue </button>
        </form>
      </div>
    </div>
  );
};