import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import("@whiskeysockets/baileys")).default;

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '*¿Qué quieres buscar en TikTok?*', m);

    async function createVideoMessage(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer });
        return videoMessage;
    }

    try {
        await m.react('🕓');
        conn.reply(m.chat, '*Descargando su video...*', m);

        let apiUrl = `https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${encodeURIComponent(text)}`;
        let { data: response } = await axios.get(apiUrl);

        if (!response || response.status !== 200 || !response.meta || response.meta.length === 0) {
            return conn.reply(m.chat, '*No se encontraron resultados para tu búsqueda.*', m);
        }

        let results = await Promise.all(response.meta.map(async result => ({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: '🔎 TikTok - Búsquedas' }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: result.title || "Sin título",
                hasMediaAttachment: true,
                videoMessage: await createVideoMessage(result.hd) // URL del video sin marca de agua
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
        })));

        const responseMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: `Resultados de: ${text}` }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: '🔎 TikTok - Búsquedas' }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: results })
                    })
                }
            }
        }, { quoted: m });

        await m.react('🍄');
        await conn.relayMessage(m.chat, responseMessage.message, { messageId: responseMessage.key.id });

    } catch (error) {
        console.error('Error en la búsqueda de TikTok:', error);
        await conn.reply(m.chat, '👅 Ocurrió un error al buscar en TikTok.', m);
    }
};

handler.help = ['tiktoksearch2'];
handler.tags = ['search'];
handler.command = ['tiktoksearch2', 'ttsearch2', 'ttss2'];
handler.register = true;
export default handler;