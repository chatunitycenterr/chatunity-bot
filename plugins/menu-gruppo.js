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
                body: 'Versione: 2.0',
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
*╔═✦ 🎵 MUSICA & AUDIO ✦═╗*  
➤ *.play* (canzone + artista) → Riproduce una canzone.  
➤ *.video* (canzone + artista) → Trova il video di una canzone.  
➤ *.shazam* (audio) → Riconosce la canzone dall’audio.  
➤ *.tomp3* (video) → Converte un video in MP3.  

*╚══════════════╝*  

*╔✦ 🌍 INFORMAZIONI & UTILITÀ ✦╗*  
➤ *.meteo* (città) → Mostra il meteo di una città.  
➤ *.orario* (città) → Mostra l’ora attuale di una città.  
➤ *.traduci* (testo) → Traduce il testo in un’altra lingua.  
➤ *.calc* (1+1) → Calcolatrice.  
➤ *.msg/attività* @ → Mostra l’attività di un utente.  
➤ *.contaparole* (testo) → Conta le parole di un testo.  
➤ *.id* (gruppo) → Mostra l’ID del gruppo.  
➤ *.gitclone* → Clona un repository Git.  
➤ *.Info* → Clona un repository Git.

*╚══════════════╝*  

*╔✦ 📷 IMMAGINI & MODIFICA FOTO ✦╗*  
➤ *.hd* (foto) → Migliora la qualità di una foto.  
➤ *.rimuovisfondo* (foto) → Rimuove lo sfondo da un’immagine.   
➤ *.rivela* (foto) → Analizza e rivela informazioni da una foto.  
➤ *.toimg* (sticker) → Converte uno sticker in immagine.  

*╚══════════════╝*  

*╔═✦ 🎭 TESTO & STILI ✦═╗*  
➤ *.leggi* (foto) → Legge il testo in un’immagine.  
➤ *.styletext* (testo) → Cambia lo stile del testo.  
➤ *.ttp* (testo) → Genera un’immagine con testo.  

*╚══════════════╝*  

*╔✦ 🎮 GIOCHI & DIVERTIMENTO ✦╗*  
➤ *.tris* → Gioca a Tris.  
➤ *.dado* → Lancia un dado.  
➤ *.slot* → Gioca alle slot machine.
➤ *.Zizzania* @ → Scopri i segreti sessuali. 
➤ *.sposami* @ → Proponi un matrimonio virtuale.  
➤ *.crush* → Scopri chi è la tua cotta.  
➤ *.topgays* → Classifica dei più gay.  
➤ *.topnazi* → Classifica dei più nazi. 
➤ *.down* → Quanto è?.  
➤ *.disabile* → Quanto è?.  
➤ *.ritardato/a* → Quanto è?.
➤ *.bello/a* → Quanto è?

*╚══════════════╝*  

*╔✦ 🎭 INTERAZIONI SOCIALI ✦╗*  
➤ *.abbraccia* @ → Dai un abbraccio.  
➤ *.odio* @ → Esprimi odio per qualcuno.  
➤ *.amore* @ → Dichiarazione d’amore.  
➤ *.insulta* (nome/@) → Insulta qualcuno.  
➤ *.scopa* @ → Fai una battuta su un’azione.  

*╚══════════════╝*  

*╔✦ 🎥 VIDEO & ANIMAZIONI ✦╗*  
➤ *.tovideo* (gif/sticker) → Converte una GIF o sticker in video.  
➤ *.togif* (video) → Converte un video in GIF.  
➤ *.toanime* (foto) → Trasforma un’immagine in stile anime.  

*╚══════════════╝*  

*╔✦ 🛠 STICKERS & MEDIA ✦╗*  
➤ *.sticker / s* (foto) → Crea uno sticker da un’immagine.  
➤ *.png* (sticker) → Converte uno sticker in PNG.  
➤ *.bonk* → Meme del bonk.  
➤ *.autoadmin* → Imposta amministrazione automatica.  

*╚══════════════╝*  

╔ ✦ ✧ ✦ ════════╗  
       © 2024 ChatUnity  
╚════════ ✦ ✧ ✦ ╝
  `;
}
