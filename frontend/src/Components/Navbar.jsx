import { Link } from "react-router-dom";
import "../Pages/css/Navbar.css"; 

// 1. Accept the user data from App.jsx
function Navbar({ user }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <h2>Student Portal</h2> 
      </div>

      {/* 2. Conditionally show the user profile ONLY if someone is logged in */}
      {user && (
        <div className="sidebar-profile">
          <div className="avatar">👤</div>
          <p className="user-email">{user.email}</p>
          <p className="user-role">ID: {user.studentId}</p>
        </div>
      )}
      
      <ul className="sidebar-links">
        {/* Only show the Login link if NO ONE is logged in */}
        {!user && <li><Link to="/">Login</Link></li>}
        
        {/* Only show these links if SOMEONE IS logged in */}
        {user && (
          <>
            <li><Link to="/students">Student Directory</Link></li>
            <li><Link to="/edit-student">Edit Student</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;