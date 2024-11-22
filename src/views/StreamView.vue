<template>
  <div class="stream-view" v-if="stream">
    <div class="video-container">
      <div class="video-placeholder">
        <p>{{ stream.title }}</p>
        <p>直播画面将在这里显示</p>
      </div>
    </div>
    <div class="stream-info">
      <div class="streamer-info">
        <el-avatar :size="50" src="https://picsum.photos/50/50" />
        <div class="text-info">
          <h3>{{ stream.streamer }}</h3>
          <p>{{ stream.viewers }} 观众正在观看</p>
        </div>
        <el-button type="primary">关注</el-button>
      </div>
      <div class="stream-description">
        <h4>直播简介1</h4>
        <p>这是一个精彩的直播，欢迎大家观看！</p>
      </div>
    </div>
  </div>
  <div v-else class="stream-not-found">
    <h2>未找到直播</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStreamStore } from '../stores/streamStore'

const route = useRoute()
const streamStore = useStreamStore()

const stream = computed(() => {
  return streamStore.streams.find(s => s.id === route.params.id)
})
</script>

<style scoped lang="scss">
.stream-view {
  padding: 20px;

  .video-container {
    width: 100%;
    aspect-ratio: 16/9;
    background: #000;
    margin-bottom: 20px;
    
    .video-placeholder {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      
      h2 {
        margin-bottom: 10px;
      }
    }
  }

  .stream-info {
    .streamer-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;

      .text-info {
        flex: 1;
        
        h3 {
          margin: 0;
          font-size: 18px;
        }
        
        p {
          margin: 5px 0 0;
          color: #666;
        }
      }
    }

    .stream-description {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;

      h4 {
        margin: 0 0 10px;
      }

      p {
        margin: 0;
        color: #666;
      }
    }
  }
}

.stream-not-found {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>