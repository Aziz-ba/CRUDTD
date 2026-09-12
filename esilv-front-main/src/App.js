import React, { useState, useEffect } from "react";
import "./App.css";
import MaterialTable from "material-table";

// Self-contained CRUD: data is persisted in the browser's localStorage,
// so the app runs with `npm start` and needs no backend.
const STORAGE_KEY = "crudtd.students";

const SEED = [
  { name: "Ada Lovelace", email: "ada@esilv.fr", year: "A4", fee: 8500 },
  { name: "Alan Turing", email: "alan@esilv.fr", year: "A5", fee: 9000 },
  { name: "Grace Hopper", email: "grace@esilv.fr", year: "A3", fee: 8000 },
];

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return saved;
  } catch (e) { /* ignore corrupt storage */ }
  return SEED.map((s, i) => ({ id: i + 1, ...s }));
}

function App() {
  const [data, setData] = useState(load);

  // Persist on every change.
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }, [data]);

  const nextId = () => (data.length ? Math.max(...data.map((r) => r.id)) + 1 : 1);

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
      <h4 align="center">React CRUD · data saved in your browser (localStorage)</h4>
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first", search: true }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setData((prev) => [{ id: nextId(), ...newData }, ...prev]);
              resolve();
            }),
          onRowUpdate: (newData) =>
            new Promise((resolve) => {
              setData((prev) => prev.map((r) => (r.id === newData.id ? newData : r)));
              resolve();
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setData((prev) => prev.filter((r) => r.id !== oldData.id));
              resolve();
            }),
        }}
      />
    </div>
  );
}

export default App;
