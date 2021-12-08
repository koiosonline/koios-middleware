import store from 'store'

const handleDiscordLevelPerUser = async (user) => {
  const callData = store.get('discordLevels');
  if (callData) {
    const filtered = callData.players.filter(player => player.username.toLowerCase() === user.toLowerCase())
    console.log(filtered);
    return await filtered;
  }
}

export default handleDiscordLevelPerUser