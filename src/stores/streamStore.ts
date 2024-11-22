import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Stream } from '../types/stream';

export const useStreamStore = defineStore('stream', () => {
  const streams = ref<Stream[]>([
    {
      id: '1',
      title: '欢迎来到我的直播间',
      streamer: '主播1',
      thumbnail: 'https://picsum.photos/400/225',
      viewers: 1200,
      category: '游戏',
      isLive: true
    },
    {
      id: '2',
      title: '音乐直播',
      streamer: '主播2',
      thumbnail: 'https://picsum.photos/400/225',
      viewers: 800,
      category: '音乐',
      isLive: true
    }
  ]);

  const featuredStream = ref<Stream | null>(null);

  const setFeaturedStream = (stream: Stream) => {
    featuredStream.value = stream;
  };

  return {
    streams,
    featuredStream,
    setFeaturedStream
  };
});