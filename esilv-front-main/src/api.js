// Data layer with two interchangeable backends:
//   - REST  : when REACT_APP_API_URL is set (e.g. a json-server on :5000)
//   - Local : otherwise, persisted in the browser's localStorage (zero setup)
const API = process.env.REACT_APP_API_URL;      // e.g. "http://localhost:5000"
const KEY = "crudtd.students";

const SEED = [
  { id: 1, name: "Ada Lovelace", email: "ada@esilv.fr", year: "A4", fee: 8500 },
  { id: 2, name: "Alan Turing", email: "alan@esilv.fr", year: "A5", fee: 9000 },
  { id: 3, name: "Grace Hopper", email: "grace@esilv.fr", year: "A3", fee: 8000 },
];

// ---- localStorage backend ----
const local = {
  read() {
    try { const v = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(v)) return v; } catch (e) {}
    return SEED;
  },
  write(rows) { try { localStorage.setItem(KEY, JSON.stringify(rows)); } catch (e) {} },
  nextId(rows) { return rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1; },
};

// ---- unified API ----
export async function list() {
  if (API) return (await fetch(`${API}/students`)).json();
  return local.read();
}

export async function create(data) {
  if (API) {
    return (await fetch(`${API}/students`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    })).json();
  }
  const rows = local.read();
  const row = { id: local.nextId(rows), ...data };
  local.write([row, ...rows]);
  return row;
}

export async function update(id, data) {
  if (API) {
    return (await fetch(`${API}/students/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    })).json();
  }
  const rows = local.read().map((r) => (r.id === id ? { ...r, ...data } : r));
  local.write(rows);
  return data;
}

export async function remove(id) {
  if (API) { await fetch(`${API}/students/${id}`, { method: "DELETE" }); return; }
  local.write(local.read().filter((r) => r.id !== id));
}

export const backendName = API ? `REST (${API})` : "localStorage";
