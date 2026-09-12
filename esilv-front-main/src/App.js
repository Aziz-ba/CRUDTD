import React, { useState, useEffect } from "react";
import "./App.css";
import MaterialTable from "material-table";
import * as api from "./api";

// CRUD over student records. Uses a REST backend (json-server) when
// REACT_APP_API_URL is set, otherwise localStorage — so it runs with zero setup.
function App() {
  const [data, setData] = useState([]);

  const refresh = () => api.list().then(setData);
  useEffect(() => { refresh(); }, []);

  const required = (v) => (v === undefined || v === "" ? "Required" : true);
  const columns = [
    { title: "Name", field: "name", validate: (r) => required(r.name) },
    { title: "Email", field: "email", validate: (r) => required(r.email) },
    { title: "Year", field: "year", validate: (r) => required(r.year) },
    { title: "Fee (€)", field: "fee", type: "numeric", validate: (r) => required(r.fee) },
  ];

  return (
    <div className="App">
      <h1 align="center">Student Manager</h1>
      <h4 align="center">React CRUD · backend: {api.backendName}</h4>
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first", search: true }}
        editable={{
          onRowAdd: (newData) => api.create(newData).then(refresh),
          onRowUpdate: (newData) => api.update(newData.id, newData).then(refresh),
          onRowDelete: (oldData) => api.remove(oldData.id).then(refresh),
        }}
      />
    </div>
  );
}

export default App;
