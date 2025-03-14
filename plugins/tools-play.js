//import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
let ogmp3;
try {
  ogmp3 = (await import('../lib/youtubedl.js')).ogmp3;
} catch (error) {
  console.error("Error importing youtubedl.js:", error);
}
const LimitAud = 725 * 1024 * 1024; // 725MB
const LimitVid = 425 * 1024 * 1024; // 425MB
let tempStorage = {};

const handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Billie Eilish - Bellyache*`, m);
  const yt_play = await search(args.join(' '));
  const ytplay2 = await yts(text);
  const texto1 = `⌘━─━≪ *YOUTUBE* ≫━─━⌘
★ Titolo:
★ ${yt_play[0].title}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ 
★ Pubblicato:
★ ${yt_play[0].ago}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ Durata:
★ ${secondString(yt_play[0].duration.seconds)}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ Visualizzazioni:
★ ${MilesNumber(yt_play[0].views)}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ 
★ Autore:
★ ${yt_play[0].author.name}
╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴
★ Link:
★ ${yt_play[0].url.replace(/^https?:\/\//, '')}
⌘━━≪Chatunity-Bot≫━━⌘
`.trim();

  tempStorage[m.sender] = { url: yt_play[0].url, title: yt_play[0].title };

  const gt = "Scarica il contenuto desiderato!"; // Definizione della variabile `gt`

  if (m.isWABusiness) {
    await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1 + `\n> Per scaricare in audio, reagisci con "🎶"\n> Per scaricare in video, reagisci con "📽"`, m, null, fake);
  } else {
    await conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: gt, footer: texto1, buttons: [{ buttonId: `.ytmp3 ${yt_play[0].url}`, buttonText: { displayText: "💬 𝗔 𝗨 𝗗 𝗜 𝗢" }, type: 1 }, { buttonId: `.ytmp4 ${yt_play[0].url}`, buttonText: { displayText: "💬 𝗩 𝗜 𝗗 𝗘 𝗢" }, type: 1 }], viewOnce: true, headerType: 4 }, { quoted: m });
  }
};

handler.before = async (m, { conn }) => {
  const text = m.text.trim().toLowerCase();
  if (!['🎶', 'audio', '📽', 'video'].includes(text)) return;
  const userVideoData = tempStorage[m.sender];
  if (!userVideoData || !userVideoData.url) return;

  const isAudio = text === '🎶' || text === 'audio';
  const selectedQuality = isAudio ? '320' : '720'; // Default quality

  const audioApis = [
    { url: () => ogmp3.download(userVideoData.url, selectedQuality, 'audio'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
    { url: () => ytmp3(userVideoData.url), extract: (data) => ({ data, isDirect: true }) },
    { url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=audio&quality=128kbps&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
    { url: () => fetch(`${global.APIs.fgmods.url}/downloader/ytmp4?url=${userVideoData.url}&apikey=${global.APIs.fgmods.key}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
    { url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
    { url: () => fetch(`${apis}/download/ytmp3?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
    { url: () => fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.download.url, isDirect: false }) }
  ];

  const videoApis = [
    { url: () => ogmp3.download(userVideoData.url, selectedQuality, 'video'), extract: (data) => ({ data: data.result.download, isDirect: false }) },
    { url: () => ytmp4(userVideoData.url), extract: (data) => ({ data, isDirect: false }) },
    { url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.dl, isDirect: false }) },
    { url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=video&quality=720p&apikey=GataDios`).then(res => res.json()), extract: (data) => ({ data: data.data.url, isDirect: false }) },
    { url: () => fetch(`${global.APIs.fgmods.url}/downloader/ytmp4?url=${userVideoData.url}&apikey=${global.APIs.fgmods.key}`).then(res => res.json()), extract: (data) => ({ data: data.result.dl_url, isDirect: false }) },
    { url: () => fetch(`${apis}/download/ytmp4?url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.status ? data.data.download.url : null, isDirect: false }) },
    { url: () => fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${userVideoData.url}`).then(res => res.json()), extract: (data) => ({ data: data.result.media.mp4, isDirect: false }) }
  ];

  const download = async (apis) => {
    let mediaData = null;
    let isDirect = false;
    for (const api of apis) {
      try {
        const data = await api.url();
        const { data: extractedData, isDirect: direct } = api.extract(data);
        if (extractedData) {
          mediaData = extractedData;
          isDirect = direct;
          break;
        }
      } catch (e) {
        console.log(`Error con API: ${e}`);
        continue;
      }
    }
    return { mediaData, isDirect };
  };

  try {
    if (isAudio) {
      const { mediaData, isDirect } = await download(audioApis);
      if (mediaData) {
        await conn.sendMessage(m.chat, { audio: isDirect ? mediaData : { url: mediaData }, mimetype: 'audio/mpeg' }, { quoted: m });
      } else {
        await conn.reply(m.chat, '❌ Non è stato possibile scaricare l\'audio', m);
      }
    } else if (text === '📽' || text === 'video') {
      await conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + mid.smsVid, fkontak, m || null);
      const { mediaData, isDirect } = await download(videoApis);
      if (mediaData) {
        const fileSize = await getFileSize(mediaData);
        const messageOptions = { fileName: `${userVideoData.title}.mp4`, caption: `⟡ *${userVideoData.title}*\n> ${wm}`, mimetype: 'video/mp4' };
        if (fileSize > LimitVid) {
          await conn.sendMessage(m.chat, { document: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
        } else {
          await conn.sendMessage(m.chat, { video: isDirect ? mediaData : { url: mediaData }, ...messageOptions }, { quoted: m || null });
        }
      } else {
        await conn.reply(m.chat, '❌ No se pudo descargar el video', m || null);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    delete tempStorage[m.sender];
  }
};

handler.command = /^(play|play2)$/i;
handler.register = true;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
  
const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Error al obtener el buffer", error);
    throw new Error("Error al obtener el buffer");
  }
}

async function getFileSize(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return parseInt(response.headers.get('content-length') || 0);
  } catch {
    return 0;
  }
}

async function fetchInvidious(url) {
  const apiUrl = `https://invidious.io/api/v1/get_video_info`
  const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`)
  const data = await response.json()
  if (data && data.video) {
    const videoInfo = data.video
    return videoInfo
  } else {
    throw new Error("No se pudo obtener información del video desde Invidious")
  }
}

function getBestVideoQuality(videoData) {
  const preferredQualities = ['720p', '360p', 'auto']
  const availableQualities = Object.keys(videoData.video)
  for (let quality of preferredQualities) {
    if (availableQualities.includes(quality)) {
      return videoData.video[quality].quality
    }
  }
  return '360p'
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async(getUrl) => {
      let result = [];
      for(let i = 0; i < getUrl.formats.length; i++) {
        let item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          let { contentLength } = item;
          let bytes = await bytesToSize(contentLength);
          result[i] = { audio: item.url, size: bytes }
        }
      };
      let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
      let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      let tinyUrl = tiny.data;
      let title = getUrl.videoDetails.title;
      let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({ title, result: tinyUrl, result2: resultFix, thumb })
    }).catch(reject)
  })
};

async function ytMp4(url) {
  return new Promise(async(resolve, reject) => {
    ytdl.getInfo(url).then(async(getUrl) => {
      let result = [];
      for(let i = 0; i < getUrl.formats.length; i++) {
        let item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          let { qualityLabel, contentLength } = item;
          let bytes = await bytesToSize(contentLength);
          result[i] = { video: item.url, quality: qualityLabel, size: bytes }
        }
      };
      let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
      let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      let tinyUrl = tiny.data;
      let title = getUrl.videoDetails.title;
      let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })
    }).catch(reject)
  })
};
