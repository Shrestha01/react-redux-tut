import logo from "./logo.svg";
import "./App.css";

// style in React js
function App() {
  const students = [
    {
      name: "adarsha",
      email: "adarsha@yahoo.com",
      phone: 123,
    },
    {
      name: "adarsha",
      email: "adarsha@yahoo.com",
      phone: 123,
    },
    {
      name: "adarsha",
      email: "adarsha@yahoo.com",
      phone: 123,
    },
  ];

  return (
    <table border="4">
      <div className="App">
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </div>
    </table>
  );
}

export default App;
