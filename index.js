import express from "express";
import fetchCalendar from "./services/fetchCalendar.js";
import dotenv from 'dotenv';
import schedule from 'node-schedule';
import handleCalendar from "./handlers/calendarHandler.js";

const app = express();
const port = process.env.PORT || 8000;
dotenv.config();

// Callback to get data on the first load
fetchCalendar()

// Scheduler to get new data for every day
const calendarSchedule = schedule.scheduleJob('* 1 * * *', async () => {
  await fetchCalendar()
})

app.use((req, res, next) => {

  // Website you wish to allow to connect. for now only koios.world and app.koios.world
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'https://koios.world');
  res.setHeader('Access-Control-Allow-Origin', 'https://app.koios.world');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Koios middleware')
});

app.get('/calendar', async (req, res) => {
  res.send(await handleCalendar())
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});