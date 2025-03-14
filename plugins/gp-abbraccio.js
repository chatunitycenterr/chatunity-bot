let handler = async (m, { conn, command, text }) => {
    if (!text) throw `Tagga chi desideri abbracciare`;
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    conn.reply(m.chat, `*stai abbracciando @${user.split('@')[0]}*`, m, { mentions: [user, m.sender] });
    
    conn.sendMessage(m.chat, { react: { text: '🫂', key: m.key } });
}

handler.customPrefix = /abbraccia/i;
handler.admin = true;
handler.command = new RegExp;
export default handler;