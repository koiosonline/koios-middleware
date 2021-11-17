import store from 'store'

const handleCalendar = async () => {
  const callData = store.get('calendar');
  if (callData) {
    return await callData;
  }
}

export default handleCalendar