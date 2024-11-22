<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <h1>热门直播</h1>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col v-for="stream in streams" :key="stream.id" :xs="24" :sm="12" :md="8" :lg="6">
        <StreamCard :stream="stream" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStreamStore } from '../stores/streamStore';
import StreamCard from '../components/StreamCard.vue';

const streamStore = useStreamStore();
const { streams } = streamStore;

onMounted(() => {
  // 这里可以添加获取直播列表的API调用
});
</script>

<style scoped lang="scss">
.home {
  padding: 20px;
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }
}
</style>