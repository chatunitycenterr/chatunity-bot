import { performance } from 'perf_hooks';

const handler = async (message, { conn, usedPrefix }) => {
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount);
    
    const profilePictureUrl = await fetchProfilePictureUrl(conn, message.sender);

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `${botName}`
            },
            externalAdReply: {
                title: 'Menu Principale',
                body: 'Versione: 1.0',
                mediaType: 1,
                renderLargerThumbnail: false,
                previewType: 'thumbnail',
                thumbnail: await fetchThumbnail('https://i.ibb.co/HpkzmrMZ/chatunity-jpg.jpg'),
                
            }
        }
    };

    await conn.sendMessage(message.chat, { text: menuText, ...messageOptions }, { quoted: message });
};

async function fetchProfilePictureUrl(conn, sender) {
    try {
        return await conn.profilePictureUrl(sender);
    } catch (error) {
        return 'default-profile-picture-url'; // Fallback URL in case of error
    }
}

async function fetchThumbnail(url) {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    } catch (error) {
        return 'default-thumbnail'; // Fallback thumbnail in case of error
    }
}

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(gruppo|comandigruppo)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
    return `
        
 『💬』 ══ •⊰✰⊱• ══ 『💬』
- ${prefix}𝐩𝐥𝐚𝐲 ( 𝐜𝐚𝐧𝐳𝐨𝐧𝐞 + 𝐚𝐫𝐭𝐢𝐬𝐭𝐚 ) 
- ${prefix}𝐯𝐢𝐝𝐞𝐨 ( 𝐜𝐚𝐧𝐳𝐨𝐧𝐞 + 𝐚𝐫𝐭𝐢𝐬𝐭𝐚 ) 
- ${prefix}𝐬𝐡𝐚𝐳𝐚𝐦 ( 𝐚𝐮𝐝𝐢𝐨 )
- ${prefix}𝐦𝐞𝐭𝐞𝐨 ( 𝐜𝐢𝐭𝐭𝐚' )
- ${prefix}𝐡𝐝 ( 𝐟𝐨𝐭𝐨 )
- ${prefix}𝐥𝐞𝐠𝐠𝐢 ( 𝐟𝐨𝐭𝐨 )
- ${prefix}𝐫𝐢𝐦𝐮𝐨𝐯𝐢𝐬𝐟𝐨𝐧𝐝𝐨 ( 𝐟𝐨𝐭𝐨 )
- ${prefix}𝐬𝐞𝐠𝐚 ( 𝐧𝐨𝐦𝐞 )
- ${prefix}𝐝𝐢𝐭𝐚𝐥𝐢𝐧𝐨 ( 𝐧𝐨𝐦𝐞 )
- ${prefix}𝐢𝐧𝐬𝐮𝐥𝐭𝐚 ( 𝐧𝐨𝐦𝐞 )
- ${prefix}𝐪𝐫𝐜𝐨𝐝𝐞 (  𝐭𝐞𝐬𝐭𝐨 )
- ${prefix}𝐫𝐢𝐯𝐞𝐥𝐚 ( 𝐟𝐨𝐭𝐨¹ )
- ${prefix}𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 ( 𝐭𝐞𝐬𝐭𝐨 )
- ${prefix}𝐜𝐚𝐥𝐜 ( 𝟏+𝟏 )
- ${prefix}𝐦𝐬𝐠/𝐚𝐭𝐭𝐢𝐯𝐢𝐭𝐚' @
- ${prefix}𝐜𝐨𝐧𝐭𝐚𝐩𝐚𝐫𝐨𝐥𝐞 ( 𝐭𝐞𝐬𝐭𝐨 )
- ${prefix}𝐛𝐞𝐥𝐥𝐨/𝐚 @
- ${prefix}𝐠𝐚𝐲 @
- ${prefix}𝐩𝐮𝐭𝐭𝐚𝐧𝐚 @
- ${prefix}𝐥𝐞𝐬𝐛𝐢𝐜𝐚 @
- ${prefix}𝐢𝐧𝐬𝐮𝐥𝐭𝐚 @
- ${prefix}𝐬𝐜𝐨𝐩𝐚 @
- ${prefix}𝐚𝐛𝐛𝐫𝐚𝐜𝐜𝐢𝐚 @
- ${prefix}𝐨𝐝𝐢𝐨 @
- ${prefix}𝐚𝐦𝐨𝐫𝐞 @
- ${prefix}𝐝𝐨𝐰𝐧 @
- ${prefix}𝐫𝐢𝐭𝐚𝐫𝐝𝐚𝐭𝐨/a @
- ${prefix}𝐝𝐢𝐬𝐚𝐛𝐢𝐥𝐞 @
- ${prefix}𝐦𝐨𝐧𝐠𝐨𝐥𝐨𝐢𝐝𝐞 @
- ${prefix}𝐝𝐨𝐱 @
- ${prefix}𝐢𝐝 (𝐠𝐫𝐮𝐩𝐩𝐨)
- ${prefix}𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞
- ${prefix}𝐢𝐦𝐠
- ${prefix}𝐬𝐞𝐭𝐢𝐠
- ${prefix}𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐢𝐠
- ${prefix}𝐭𝐫𝐢𝐬
- ${prefix}𝐬𝐩𝐨𝐬𝐚𝐦𝐢
- ${prefix}𝐜𝐫𝐮𝐬𝐡
- ${prefix}𝐭𝐨𝐩𝐠𝐚𝐲𝐬
- ${prefix}𝐭𝐨𝐩𝐧𝐚𝐳𝐢
- ${prefix}𝐭𝐭𝐩
- ${prefix}𝐝𝐚𝐝𝐨
- ${prefix}𝐬𝐭𝐢𝐜𝐤𝐞𝐫 / 𝐬
- ${prefix}𝐫𝐢𝐦𝐮𝐨𝐯𝐢𝐬𝐟𝐨𝐧𝐝𝐨
- ${prefix}𝐭𝐨𝐯𝐢𝐝𝐞𝐨
- ${prefix}𝐭𝐨𝐠𝐢𝐟
- ${prefix}𝐛𝐨𝐧𝐤
- ${prefix}𝐩𝐧𝐠
- ${prefix}𝐬𝐥𝐨𝐭
- ${prefix}𝐚𝐮𝐭𝐨𝐚𝐝𝐦𝐢𝐧
『💬』 ══ •⊰✰⊱• ══ 『💬』

    `;
}
