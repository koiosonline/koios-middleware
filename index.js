import express from "express";
import fetchCalendar from "./services/fetchCalendar.js";
import dotenv from 'dotenv';
import schedule from 'node-schedule';
import handleCalendar from "./handlers/calendarHandler.js";

const app = express();
const port = 8000;
dotenv.config();

// Callback to get data on the first load
fetchCalendar()

// Scheduler to get new data for every day
const calendarSchedule = schedule.scheduleJob('* 1 * * *', async () => {
  await fetchCalendar()
})

app.get('/', (req, res) => {
  res.send('Welcome to the Koios middleware')
});

app.get('/calendar', async (req, res) => {
  res.send(await handleCalendar())
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});