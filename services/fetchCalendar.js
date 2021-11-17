import axios from 'axios'
import store from 'store'

const fetchCalendar = async () => {
  const apikey = process.env.CALENDAR_KEY
  const calendarId = process.env.CALENDAR_ID
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/?key=${apikey}`

  await axios.get(url)
    .then((res) => {
      const data = res.data.items
      store.set('calendar', data);
      return
    })
}

export default fetchCalendar