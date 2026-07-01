import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/Login.css"; 
function Login({ setUser }) { 
  const navigate = useNavigate(); 

  const [formdata, setformdata] = useState({
    Email: "",
    Password: "",
  });

  const onChange1 = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({
      email: formdata.Email,
      role: "Student",
      studentId: "80722222"
    });
    navigate("/students"); 
  };

  return (
    <div className="login-wrapper"> 
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handlesubmit} className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="Email"
            onChange={onChange1}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="Password"
            onChange={onChange1}
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;