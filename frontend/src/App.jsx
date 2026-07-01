import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/jsx/Login";
import ShowStudents from "./Pages/jsx/ShowStudents";
import EditStudent from "./Pages/jsx/EditStudent";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {user && <Navbar user={user} />} 

        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#f4f7f6" }}>
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/students" element={<ShowStudents />} />
            <Route path="/edit-student" element={<EditStudent />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;