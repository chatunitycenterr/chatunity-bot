import { performance } from 'perf_hooks'

let handler = async (m, { conn, text }) => {
  // Get bot name from database or use default
  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`

  // Animation messages
  let messages = [
    `Ora faccio un ditalino a ${text}`,
    `ㅤ\n✌🏻`,
    `👆🏻\nㅤ`,
    `☝🏻\nㅤ`,
    `ㅤ\n🤟🏻`,
    `👋🏻\nㅤ`,
    `ㅤ\n✌🏻`,
    `🤟🏻\nㅤ`,
    `☝🏻\nㅤ`, 
    `ㅤ\n☝🏻`,
    `ㅤ\n👆🏻`,
    `ㅤ\n👋🏻`
  ]

  // Send animation messages
  for (let msg of messages) {
    await conn.sendMessage(m.chat, {
      text: msg,
      contextInfo: {
        forwardingScore: 99,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363259442839354@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    }, { quoted: m })
  }

  // Final message
  let start = performance.now()
  let end = performance.now()
  let time = `${end - start}`
  let final = `Oh ${text} è venuta!🥵`

  await conn.sendMessage(m.chat, {
    text: final,
    contextInfo: {
      forwardingScore: 99,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363259442839354@newsletter',
        serverMessageId: '',
        newsletterName: `${nomeDelBot}`
      }
    }
  }, { quoted: m })
}

handler.command = ['ditalino']
handler.tags = ['fun']

export default handler