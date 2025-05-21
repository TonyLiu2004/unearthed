- When connecting to database, use data from DATABASE_PUBLIC_URL for PGHOST and PGPORT
- database creation needs quotes around column titles to keep caps
-  client might try to access server before its up, causing connect error. just restart client.

3
- Frontend: By default, when you use fetch('/gifts'), the browser tries to make the request to the same origin as your front-end. Make sure the server has the correct port.

- Remember to export getGiftsById in server/controllers/gift.js
- Make sure select queries have quotations

## ⚙️ Setup Instructions

### 🖥️ Frontend

Serve the frontend using Python's built-in HTTP server:

```bash
cd SpokenVision/FrontEnd/public
python -m http.server 8000
```

### 🧠 Backend

Serve the backend using Uvicorn:

```bash
cd Backend
uvicorn cloud_server:app --host 0.0.0.0 --port 5000
```

### 🔁 Connect Frontend to Backend

Open the following files:

- `FrontEnd/public/script.js`
- `FrontEnd/public/model-loader.js`

Set the `API_ENDPOINT` to:

```js
const API_ENDPOINT = "http://localhost:5000";
```
server will be hosted at http://localhost:8000/index.html
Backend will be hosted at htpp://localhost:5000/
To call local backend, change the API_ENDPOINT in FrontEnd/public/script.js and FrontEnd/public/model-loader.js to htpp://localhost:5000
  
<p align="center">
  <a href="https://youtube.com/shorts/gWyHpFkxIAg?feature=share">
    <img src="https://i.imgur.com/fDb4ilz.png" style="max-height: 500px; width: auto;" />
  </a>
</p>

[![View Slides](https://i.imgur.com/h8mkL0S.png)](https://docs.google.com/presentation/d/1-q8HFq-ZHlbFR2NloiWQXmuxu3pfY8jJQWInpOJ0tsQ/edit?usp=sharing)
