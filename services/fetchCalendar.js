import axios from 'axios'
import store from 'store'

let data = []

const fetchCalendar = async () => {
  const apikey = process.env.CALENDAR_KEY
  const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events/?key=${apikey}`

  await axios.get(url)
    .then((res) => {
      console.log('call')
      data = res.data.items
      store.set('calendar', data);
      return res.data.items
    })

  return data;
}

export default fetchCalendar