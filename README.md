- When connecting to database, use data from DATABASE_PUBLIC_URL for PGHOST and PGPORT
- database creation needs quotes around column titles to keep caps
-  client might try to access server before its up, causing connect error. just restart client.

3
- Frontend: By default, when you use fetch('/gifts'), the browser tries to make the request to the same origin as your front-end. Make sure the server has the correct port.

- Remember to export getGiftsById in server/controllers/gift.js
- Make sure select queries have quotations
  
<p align="center">
  <a href="https://youtube.com/shorts/gWyHpFkxIAg?feature=share">
    <img src="https://i.imgur.com/fDb4ilz.png" style="max-height: 500px; width: auto;" />
  </a>
</p>

[![View Slides](./SpokenVision-Thumbnail.png)](https://docs.google.com/presentation/d/1-q8HFq-ZHlbFR2NloiWQXmuxu3pfY8jJQWInpOJ0tsQ/edit?usp=sharing)
