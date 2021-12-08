import store from 'store'

const handleDiscordLevelPerUser = async (user) => {
  const callData = store.get('discordLevels');
  if (callData) {
    let foundUsername;
    const filtered = callData.map((element) => {
      const result = element.filter(callData => callData.username.toLowerCase() === user.toLowerCase())
      if (result.length >= 1) {
        foundUsername = result
      }
    })
    return await foundUsername;
  }
}

export default handleDiscordLevelPerUser