// server/api/videos.ts

import { parseStringPromise } from 'xml2js';

export default defineEventHandler(async () => {
  const channelId = 'UCwqpb6qDbuwO0h2Kzr1GBvQ'; // o'zingizning kanal ID
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  const res = await fetch(url);
  const xml = await res.text();

  const json = await parseStringPromise(xml);
  const entries = json.feed.entry || [];

  // Video ma'lumotlarini tayyorlash
  const videos = entries.slice(0, 5).map((entry: any) => ({
    id: entry['yt:videoId'][0],
    title: entry.title[0],
    published: entry.published[0],
    link: entry.link[0].$.href
  }));

  return { videos };
});
