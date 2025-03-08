import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import * as fs from 'fs'

let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
  let users = participants.map(u => u.id)
  let quoted = m.quoted ? m.quoted : m
  let mime = (quoted.msg || quoted).mimetype || ''
  let isMedia = /image|video|sticker|audio/.test(mime)
  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`
  
  // Create invisible tag using zero-width joiner
  let more = String.fromCharCode(8206)
  let hide = more.repeat(850)
  let htextos = text ? text : ''

  const messageOptions = {
    contextInfo: {
      mentionedJid: users,
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363259442839354@newsletter',
        serverMessageId: '',
        newsletterName: `${nomeDelBot}`
      }
    }
  }

  try {
    if (isMedia && quoted.mtype === 'imageMessage') {
      let media = await quoted.download()
      await conn.sendMessage(m.chat, { 
        image: media, 
        caption: htextos + hide,
        mentions: users,
        ...messageOptions
      })
    } else if (isMedia && quoted.mtype === 'videoMessage') {
      let media = await quoted.download()
      await conn.sendMessage(m.chat, { 
        video: media,
        caption: htextos + hide,
        mentions: users,
        ...messageOptions
      })
    } else if (isMedia && quoted.mtype === 'audioMessage') {
      let media = await quoted.download()
      await conn.sendMessage(m.chat, { 
        audio: media,
        mimetype: 'audio/mp4',
        mentions: users,
        ...messageOptions
      })
    } else if (isMedia && quoted.mtype === 'stickerMessage') {
      let media = await quoted.download()
      await conn.sendMessage(m.chat, {
        sticker: media,
        mentions: users,
        ...messageOptions
      })
    } else {
      await conn.sendMessage(m.chat, {
        text: htextos + hide,
        mentions: users,
        ...messageOptions
      })
    }
  } catch (error) {
    console.error('Error in hidetag:', error)
    m.reply('Error processing hidetag command')
  }
}

handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(hidetag|notificar|menziona)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler