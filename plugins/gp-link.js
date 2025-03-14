let handler = async (m, { conn, args }) => {
    let group = m.chat
    let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
    
    // Get bot name from database or use default
    let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`
  
    await conn.sendMessage(m.chat, { 
      text: link,
      contextInfo: {
        forwardingScore: 99,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363259442839354@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    }, { quoted: m, detectLink: true })
  }
  
  handler.command = /^link(gro?up)?$/i
  handler.admin = true
  handler.group = true
  handler.botAdmin = true
  export default handler