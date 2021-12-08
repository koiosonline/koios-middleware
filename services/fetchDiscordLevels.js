import axios from 'axios'
import store from 'store'

const fetchDiscordLevels = async () => {
  const guildId = process.env.GUILD_ID
  const url = `https://mee6.xyz/api/plugins/levels/leaderboard/${guildId}`

  await axios.get(url)
    .then((res) => {
      const data = res.data
      store.set('discordLevels', data);
      return
    })
}

export default fetchDiscordLevels