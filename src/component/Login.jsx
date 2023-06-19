import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebas/firebase";
import swal from "sweetalert";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      swal({
        title: "Logged In",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      setLoading(false);
      navigate("/")

    } catch (err) {
      swal({
        title: "Invalid information",
        icon: "error",
        buttons: false,
        timer: 3000
      })
      setErr(true);
    }
    setLoading(false);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>{loading ? <TailSpin height={25} color="white"/> : 'Login'}</button>
          {err && <span></span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;