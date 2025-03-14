import { cpus as _cpus, totalmem, freemem } from 'os'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix, command }) => {
  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`
  let versioneBot = '1.0' // Specifica la versione del bot
  let old = performance.now()
  let neww = performance.now()
  let speed = (neww - old).toFixed(2) // Limita la velocità a 2 decimali
  let uptime = process.uptime() * 1000

  // CPU info
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let cpuModel = cpus[0]?.model || 'Unknown Model'
  let cpuSpeed = cpu.speed.toFixed(2)

  let caption = `『💬』 ══ •⊰✰⊱• ══ 『💬』
🟢 𝐀𝐭𝐭𝐢𝐯𝐢𝐭𝐚': ${clockString(uptime)}
🚀 𝐕𝐞𝐥𝐨𝐜𝐢𝐭𝐚': ${speed} ms

💻 𝐈𝐧𝐟𝐨 𝐒𝐢𝐬𝐭𝐞𝐦𝐚:
📊 𝐌𝐨𝐝𝐞𝐥𝐥𝐨 𝐂𝐏𝐔: ${cpuModel}
🔄 𝐕𝐞𝐥𝐨𝐜𝐢𝐭𝐚' 𝐂𝐏𝐔: ${cpuSpeed} MHz

💾 𝐌𝐞𝐦𝐨𝐫𝐢𝐚:
🟣 𝐑𝐀𝐌: ${format(totalmem() - freemem())} / ${format(totalmem())}
🔵 𝐑𝐀𝐌 𝐋𝐢𝐛𝐞𝐫𝐚: ${format(freemem())}
『💬』 ══ •⊰✰⊱• ══ 『💬』`

  const profilePictureUrl = await fetchProfilePictureUrl(conn, m.sender)

  let messageOptions = {
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363259442839354@newsletter',
        serverMessageId: '',
        newsletterName: `${nomeDelBot}`
      }
    }
  }

  if (profilePictureUrl !== 'default-profile-picture-url') {
    messageOptions.contextInfo.externalAdReply = {
      title: nomeDelBot,
      body: `Versione: ${versioneBot}`,
      mediaType: 1,
      renderLargerThumbnail: false,
      previewType: 'thumbnail',
      thumbnail: await fetchThumbnail('https://i.ibb.co/HpkzmrMZ/chatunity-jpg.jpg'),
    }
  }

  await conn.sendMessage(m.chat, {
    text: caption,
    ...messageOptions
  })
}

async function fetchProfilePictureUrl(conn, sender) {
  try {
    return await conn.profilePictureUrl(sender)
  } catch (error) {
    return 'default-profile-picture-url' // Fallback URL in case of error
  }
}

async function fetchThumbnail(url) {
  try {
    const response = await fetch(url)
    const buffer = await response.buffer()
    return buffer
  } catch (error) {
    return 'default-thumbnail' // Fallback thumbnail in case of error
  }
}

handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping)$/i

export default handler

function clockString(ms) {
  let d = Math.floor(ms / 86400000)
  let h = Math.floor(ms / 3600000) % 24
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}