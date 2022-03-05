import logo from "./logo.svg";
import "./App.css";
import { Table } from "react-bootstrap";

// style in React js
function App() {
  const data = [
    { name: "adarsha", email: "a@yahoo.com", phone: "098" },
    { name: "susmtia", email: "s@yahoo.com", phone: "123" },
    { name: "adarsha", email: "a@yahoo.com", phone: "098" },
    { name: "susmtia", email: "s@yahoo.com", phone: "123" },
    { name: "adarsha", email: "a@yahoo.com", phone: "098" },
    { name: "susmtia", email: "s@yahoo.com", phone: "123" },
  ];
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
