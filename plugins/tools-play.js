import { exec } from "child_process";
import fs from "fs";
import path from "path";

const PLAY_FOLDER = "./play"; // 📂 Cartella per salvare gli MP3
if (!fs.existsSync(PLAY_FOLDER)) fs.mkdirSync(PLAY_FOLDER);

let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.sendMessage(m.chat, { text: "❌ *Devi inserire un titolo o un link YouTube!*\n📌 _Esempio:_ *.play Never Gonna Give You Up*" }, { quoted: m });

    let query = args.join(" ");
    let isUrl = query.includes("youtube.com") || query.includes("youtu.be");
    let searchCommand = isUrl ? query : `ytsearch:"${query}"`;

    // 📌 Ricava informazioni sulla canzone
    exec(`yt-dlp --dump-json ${searchCommand}`, async (error, stdout) => {
        if (error) {
            console.error(error);
            return conn.sendMessage(m.chat, { text: "❌ *Errore nel recupero delle informazioni!*" }, { quoted: m });
        }

        let videoInfo;
        try {
            videoInfo = JSON.parse(stdout.trim());
        } catch (err) {
            console.error(err);
            return conn.sendMessage(m.chat, { text: "❌ *Errore nel parsing dei dati!*" }, { quoted: m });
        }

        let { title, uploader, duration_string, thumbnail, upload_date } = videoInfo;
        let formattedDate = `${upload_date.substring(6, 8)}/${upload_date.substring(4, 6)}/${upload_date.substring(0, 4)}`;

        // 📌 Nome file per il download
        let fileName = `audio_${Date.now()}.mp3`;
        let filePath = path.join(PLAY_FOLDER, fileName);

        // 📌 Mostra Embed con le informazioni
        let embedMessage = {
            text: `⚡ *DOWNLOAD IN CORSO* ⚡\n\n📌 *Brano:* ${title}\n🎤 *Autore:* ${uploader}\n⏳ *Durata:* ${duration_string}\n📅 *Pubblicato il:* ${formattedDate}\n\n🎵 _Attendere..._`,
            contextInfo: {
                externalAdReply: {
                    title: "⚡ DOWNLOAD IN CORSO ⚡",
                    body: `Download in corso di *${title}*...`,
                    thumbnailUrl: thumbnail,
                    sourceUrl: "https://wa.me/" + m.sender.split('@')[0],
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        };

        await conn.sendMessage(m.chat, embedMessage, { quoted: m });

        // 📌 Comando per scaricare l'MP3
        let ytCommand = `yt-dlp -f bestaudio --extract-audio --audio-format mp3 --output "${filePath}" ${searchCommand}`;

        // 🔄 Invia un messaggio di caricamento
        await conn.sendMessage(m.chat, { react: { text: "🎶", key: m.key } });

        // 📌 Esegui il download
        exec(ytCommand, async (err) => {
            if (err) {
                console.error(err);
                return conn.sendMessage(m.chat, { text: "❌ *Errore nel download del file!*" }, { quoted: m });
            }

            if (!fs.existsSync(filePath)) {
                return conn.sendMessage(m.chat, { text: "❌ *Errore: File non trovato dopo il download!*" }, { quoted: m });
            }

            // 📌 Invia il file MP3
            await conn.sendMessage(m.chat, { 
                audio: { url: filePath }, 
                mimetype: "audio/mpeg", 
                fileName: `${title}.mp3`,
                caption: `🎶 *${title}*\n✅ *Download completato!*`
            }, { quoted: m });

            // 🗑️ Opzionale: Rimuovi il file dopo l'invio
            setTimeout(() => fs.unlinkSync(filePath), 60000);
        });
    });
};

handler.command = /^(play)$/i;
handler.group = true;

export default handler;
