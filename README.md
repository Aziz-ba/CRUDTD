# 🎓 React CRUD — Student Manager

A **React** single-page app implementing full **CRUD** (Create / Read / Update / Delete) over a list of student records, using [`material-table`](https://material-table.com/) for an editable, validated data grid wired to a REST backend.

The app lives in [`esilv-front-main/`](esilv-front-main/).

---

## ✨ Features

- 📋 **Editable data grid** — add, edit and delete rows inline with `material-table`
- ✅ **Field validation** — required checks on `name`, `email`, `year`, `fee`
- 🔄 **REST integration** — `GET` / `POST` / `PUT` / `DELETE` against a backend API (`fetch`)
- ⚛️ **React hooks** — `useState` / `useEffect` for state and data loading

---

## 🚀 Run it

```bash
cd esilv-front-main
npm install
npm start        # opens http://localhost:3000
```

The grid expects a REST endpoint returning/accepting student objects `{ name, email, year, fee }`. Point the `url` in `src/App.js` at your API.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Material UI](https://img.shields.io/badge/material--table-0081CB?style=flat-square&logo=materialdesign&logoColor=white)

React · Hooks · material-table · Fetch API · Create React App

---

## 📄 License

Released under the [MIT License](LICENSE).
