let handler = async (m, { conn, command, text }) => {
    if (!text) throw `Tagga chi desideri scopare`;
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null);
    if (!user) throw `Non è stato possibile trovare l'utente.`;
    conn.reply(m.chat, `*Oh si 🤤 stai fottendo per bene quella cagna di @${user.split('@')[0]}*`, m, { mentions: [user, m.sender] });
    
    conn.sendMessage(m.chat, { react: { text: '💦', key: m.key } });
}

handler.customPrefix = /scopa/i;
handler.admin = true;
handler.command = new RegExp;
export default handler;