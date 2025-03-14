let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('𝐀𝐝𝐝𝐢𝐨 𝐬𝐞𝐭𝐭𝐚𝐭𝐨 𝐜𝐨𝐫𝐫𝐞𝐭𝐭𝐚𝐦𝐞𝐧𝐭𝐞 ✅')
} else throw `inserisci il messaggio`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
