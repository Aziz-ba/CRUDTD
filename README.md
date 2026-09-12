# 🎓 React CRUD — Student Manager

A **React** single-page app implementing full **CRUD** (Create / Read / Update / Delete) over a list of student records, using [`material-table`](https://material-table.com/) for an editable, validated data grid.

It's **self-contained**: data is persisted in the browser's **localStorage**, so it runs with no backend and no setup. The app lives in [`esilv-front-main/`](esilv-front-main/).

---

## ✨ Features

- 📋 **Editable data grid** — add, edit and delete rows inline
- ✅ **Field validation** — required checks on `name`, `email`, `year`, `fee`
- 💾 **Persistent** — changes survive refresh via `localStorage` (seeded on first run)
- 🔎 Built-in search, auto-incrementing IDs
- ⚛️ **React hooks** — `useState` / `useEffect`

---

## 🚀 Run it

```bash
cd esilv-front-main
npm install
npm start        # http://localhost:3000
```

No backend required — the grid reads and writes `localStorage`. Clear your site data to reset to the seed rows.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Material Table](https://img.shields.io/badge/material--table-0081CB?style=flat-square&logo=materialdesign&logoColor=white)

React · Hooks · material-table · localStorage · Create React App

---

## 📄 License

Released under the [MIT License](LICENSE).
