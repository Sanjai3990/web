import { useState } from "react";
import "../css/Login.css"; 

function EditStudent() {
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    email: "john@example.com",
    roll_no: "80722222",
    address: "123 Campus Drive",
  });
  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Student Data:", studentData);
    alert("Student Updated Successfully!");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Edit Student</h1>
        <form onSubmit={handleUpdate} className="login-form">
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            placeholder="Student Name"
            required
          />
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="roll_no"
            value={studentData.roll_no}
            onChange={handleChange}
            placeholder="Roll Number"
          />
          <input
            type="text"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <button type="submit" className="login-btn">Update Student</button>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;