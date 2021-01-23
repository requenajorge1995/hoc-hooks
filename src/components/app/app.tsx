import "./app.css";

import { Schedule } from "../../types";

import withFetch from "../../hoc/withFetch";
import Table from "../table/table";

const URL = "http://localhost:3001/schedule";

const TableWithFetch = withFetch(Table, URL)<Schedule>;

const verga = TableWithFetch<Schedule>

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TableWithFetch />
    </div>
  );
}
