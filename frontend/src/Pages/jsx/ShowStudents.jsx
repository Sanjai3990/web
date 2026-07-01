function ShowStudents() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Student Directory</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f7f6" }}>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>80722222</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>
              <button style={{ padding: "5px 10px", cursor: "pointer" }}>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowStudents;