import { performance } from 'perf_hooks'

let handler = async (m, { conn, text }) => {
  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`
  
  const messageOptions = {
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

  let { key } = await conn.sendMessage(m.chat, { 
    text: "Ora sego",
    ...messageOptions
  }, { quoted: m })

  const array = [
    "8===👊=D", "8=👊===D", "8==👊==D", "8===👊=D", "8===👊=D💦"
  ]

  for (let item of array) {
    await conn.sendMessage(m.chat, { 
      text: `${item}`, 
      edit: key,
      ...messageOptions
    }, { quoted: m })
    await new Promise(resolve => setTimeout(resolve, 20))
  }

  return conn.sendMessage(m.chat, { 
    text: `Oh ${text} ha sborrato!😋💦`.trim(),
    edit: key,
    mentions: [m.sender],
    ...messageOptions
  }, { quoted: m })
}

handler.help = ['sega']
handler.tags = ['fun']
handler.command = /^(sega)$/i

export default handler