# 🎓 React CRUD - Student Manager

A **React** app with full **CRUD** over student records, using [`material-table`](https://material-table.com/) for an editable, validated data grid - with a **swappable data layer**: run it instantly on **localStorage**, or point it at a real **json-server REST backend**.

The app lives in [`esilv-front-main/`](esilv-front-main/).

---

## ✨ Features

- 📋 **Editable, searchable grid** - inline add / edit / delete with validation (`name`, `email`, `year`, `fee`)
- 🔀 **Two interchangeable backends** via [`src/api.js`](esilv-front-main/src/api.js):
  - **localStorage** (default) - zero setup, persists in the browser
  - **REST** - set `REACT_APP_API_URL` to use a json-server backend (`db.json` included)
- ⚛️ **React hooks** and a clean async data layer (the UI doesn't care which backend is used)

---

## 🚀 Run it

**Standalone (localStorage) - nothing else needed:**
```bash
cd esilv-front-main
npm install
npm start                       # http://localhost:3000
```

**Full-stack (REST via json-server):**
```bash
npm run server                  # terminal 1 - REST API on :5000 (from db.json)
REACT_APP_API_URL=http://localhost:5000 npm start   # terminal 2
```

The header shows which backend is active.

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Material Table](https://img.shields.io/badge/material--table-0081CB?style=flat-square&logo=materialdesign&logoColor=white)
![json-server](https://img.shields.io/badge/json--server-000000?style=flat-square)

React · Hooks · material-table · json-server · localStorage

---

## 📄 License

Released under the [MIT License](LICENSE).
