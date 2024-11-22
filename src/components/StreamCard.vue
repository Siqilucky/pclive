<template>
  <el-card class="stream-card" shadow="hover" @click="navigateToStream">
    <div class="thumbnail-container">
      <img :src="stream.thumbnail" :alt="stream.title" class="thumbnail">
      <div class="viewers-badge" v-if="stream.isLive">
        <el-tag type="danger">LIVE</el-tag>
        {{ stream.viewers }} 观众
      </div>
    </div>
    <div class="stream-info">
      <h3>{{ stream.title }}</h3>
      <p>{{ stream.streamer }}</p>
      <p>{{ stream.category }}</p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import type { Stream } from '../types/stream';

const props = defineProps<{
  stream: Stream
}>();

const router = useRouter();

const navigateToStream = () => {
  router.push(`/stream/${props.stream.id}`);
};
</script>

<style scoped lang="scss">
.stream-card {
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .thumbnail-container {
    position: relative;
    
    .thumbnail {
      width: 100%;
      height: 225px;
      object-fit: cover;
    }

    .viewers-badge {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .stream-info {
    padding: 10px 0;

    h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
    }

    p {
      margin: 4px 0;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>